import AppointmentForm from "@/components/account/AppointmentForm";
import AppointmentList from "@/components/account/AppointmentList";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import OurProcess from "@/components/home/OurProcess";
import PageMetaTags from "@/containers/PageMetaTags";
import { addAppointment, sayHello } from "@/lib/action";
import Link from "next/link";

export default function Page() {
  return (
    <InnerPageContainer>
      <PageMetaTags
        title="Contact Us"
        description={"We are reachable at - contact@d.com"}
        url="/contact-us"
      />
      <>
        <h1 className="sm:text-4xl ml-16  mt-12 text-3xl  font-bold  ">
          CONTACT US
        </h1>
        <div className="flex flex-col content-center justify-center gap-6 mt-10 lg:flex-row">
          <div className="leftDiv p-5 mb-4 flex flex-col w-full flex-1">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">GET IN TOUCH</h2>
              <p className="mt-3 text-xl">
                Send me an email with all details about your website i usually
                responed immediatly or within 24 hours.
              </p>
            </div>
            <div className="flex gap-7 flex-col mt-10">
              <div className="flex gap-2">
                <div>
                  <img className="w-8 m-3" src="phone.png" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">Phone</h1>
                  <p>(206) 670 6888</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <img className="w-8 m-3" src="email.png" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Email</h1>
                  <p>ZazaiZalmai70@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <img className="w-8 m-3" src="location.png" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Area of Services</h1>
                  <p>All states of USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightDiv flex-1 border-blue-200 rounded-3xl shadow-2xl bg-blue-50 p-5">
            <h2 className="text-3xl font-bold mb-10 text-gray-700">
              Book Appointment
            </h2>
            <AppointmentForm />
          </div>
        </div>
      </>
    </InnerPageContainer>
  );
}
