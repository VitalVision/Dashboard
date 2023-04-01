import Content from '../../components/content';
import PatientCard from '../../components/patient/PatientCard';
import { useEffect, useState } from 'react';


export default function PatientPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const res = await fetch('/data/patients.json');
      const data = await res.json();
      setPatients(data);
    }

    fetchPatients();
  }, []);

  return (
    <Content title="Patients">
      <div className="mx-2 my-2 flex gap-6 flex-wrap">
        {patients.map((patient) => (
          <PatientCard patient={patient}
          />))}
      </div>
    </Content >
  );
}
