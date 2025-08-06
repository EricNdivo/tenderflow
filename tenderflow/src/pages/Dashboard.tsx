import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Tender } from '../lib/db/types';

const Dashboard: React.FC = () => {
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const { data, error } = await supabase
          .from('tenders')
          .select('*');

        if (error) throw error;

        setTenders(data);
      } catch (error) {
        setError('Failed to fetch tenders');
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-4">
        {tenders.map(tender => (
          <li key={tender.id} className="border p-2 mb-2">
            <h2 className="font-semibold">{tender.title}</h2>
            <p>{tender.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;