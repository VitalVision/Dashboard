import Content from '../../../components/content';
import PatientInfoPage from '../../../components/patient/PatientInfoPage';

const patientData = {
  name: "John Doe",
  picture: "/images/1.jpg",
  nextCheckupDate: "2023-04-15",
  overallProgressPercentage: 75,
  patientId: 1,
  gamesPlayed: [
    {
      name: "Sort Stack",
      progress: 60,
    },
    {
      name: "Tracer",
      progress: 80,
    },
  ],
  strokeType: "Ischemic Stroke",
  rehabDuration: "3 months",
  medicalDisabilities: ["None", "Left Hand Paralysis"],
};


export default function PatientDashboardPage() {
  return (<Content title="Patient Dashboard" >
    <PatientInfoPage patientData={patientData} />
  </Content>)
}
