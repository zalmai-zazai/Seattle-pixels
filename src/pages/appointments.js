import AppointmentList from "@/components/account/AppointmentList";
import InnerPageContainer from "@/components/common/InnerPageContainer";

export default function Page() {
  return (
    <InnerPageContainer>
      <>
        <h1 className="sm:text-4xl ml-16  mt-12 text-3xl  font-bold  ">
          All Appointments
        </h1>
        <div className="flex flex-col content-center justify-center gap-6 mt-10 lg:flex-row">
          <AppointmentList />
        </div>
      </>
    </InnerPageContainer>
  );
}
