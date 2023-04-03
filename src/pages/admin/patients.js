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
      <div className="mx-2 my-2 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {patients.map((patient) => (
          <PatientCard patient={patient}
          />))}
      </div>
    </Content >
  );
}
