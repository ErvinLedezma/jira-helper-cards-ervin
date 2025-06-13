import HelperNote from "../components/HelperNote";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center">
      <HelperNote
        indexCard={1}
        code="SAAS-0000"
        title="Agenda/Topic"
        description="Description of what is done here"
        updatedDate={new Date()}
        uploadDate={new Date('2023-01-05')}
        state="active"
      />
      <HelperNote
        indexCard={2}
        code="SAAS-0002"
        title="Agenda/Topic"
        description="Description of what is done here"
        updatedDate={new Date()}
        uploadDate={new Date('2023-01-01')}
        state="active"
      />
    </div>
  );
}
