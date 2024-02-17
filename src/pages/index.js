import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Banner from "@/components/banner";
import Reviews from "@/components/Reviews";

const faqData = [
  {
    question: "What is your cancellation policy?",
    answer:
      "Please notify us no later than 24 hours before your appointment start time to avoid a fee.",
  },
  {
    question: "What are the payment arrangements?",
    answer:
      "You can book an appointment online through our website or by calling us at +1(646)578-0645",
  },
  {
    question: "How soon can you arrive?",
    answer:
      "At times, our cleaning service providers may arrive within 3-4 hours, but we suggest booking your cleaning appointment at least 3 days in advance for the best experience!",
  },
  {
    question: "Do I need to be at home during cleaning?",
    answer:
      "No worries, there's no need for you to be home during our service. We'll chat about the arrangements to ensure our cleaning providers can access your place.",
  },
  {
    question: "How many cleaning providers will you send?",
    answer:
      "Normally, we assign one service provider for apartment cleaning tasks. However, for more intensive jobs, the crew size will be decided based on the specific requirements of the task.",
  },
  {
    question: "What is your pet policy?",
    answer:
      "We absolutely love pets and strive to create a pet-friendly cleaning experience! Yet, ensuring our staff's safety is crucial. If, unfortunately, your pet exhibits aggressive behavior, we may need to decline services and apply a cancellation fee.",
  },
  {
    question: "How far in advance may I schedule a meeting?",
    answer:
      "For the best scheduling, we suggest booking your appointment three days in advance. However, we also offer same-day appointments in certain cases for your convenience!",
  },

  {
    question: "What cleaning services are excluded from our cleanin offers?",
    answer:
      "Cleaning walls and ceilings, Exterior window cleaning,  Moving furniture or objects over 35 pounds, Wiping TV screens or computer equipment, Reaching inaccessible heights without proper equipment, Meal preparation,  Providing services related to children.",
  },
];

export default function Home() {
  return (
    <>
      <Banner path="/#main-road">
        Welcome To Esthete Cleaning Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-bounce inline-flex text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </Banner>
      <main className="flex min-h-screen  flex-col items-center justify-between mx-10 py-0 ">
        <div className="mt-60 mb-10">
          <Cta />
        </div>
        <div className="container items-center py-8 mx-20 ">
          <h3 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h3>
          {faqData.map((faq, index) => (
            <Faqs key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <Reviews />
      </main>
    </>
  );
}
