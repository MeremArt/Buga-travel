import "./FAQLandingstyle.css";
import FAQCard from "./FAQCard";

const FAQnotes = [
  {
    number: "01",
    Question: "What is the purpose of this mental health care app?",
    Answer:
      "The purpose of our app is to provide accessible and convenient mental health support. You can access a range of resources, tools, and professional assistance to help manage your mental well-being.",
  },
  {
    number: "02",
    Question: "Is the app free to use?",
    Answer:
      "Yes, our app is free to download and use. However, some premium features or consultations with mental health professionals may require a subscription or payment.",
  },
  {
    number: "03",
    Question: "How can this app help me with my mental health?",
    Answer:
      "Our app offers various features such as guided meditation, mood tracking, journaling, and access to a library of educational resources. Additionally, you can schedule appointments with licensed therapists or counselors for personalized support.",
  },
  {
    number: "04",

    Question: "Is the app secure and private?",
    Answer:
      "Yes, we prioritize the security and privacy of our users. We use encryption and adhere to strict data protection measures. Your personal information and conversations with mental health professionals are kept confidential.",
  },
  {
    number: "05",

    Question:
      "Can I communicate with a mental health professional through the app?",
    Answer:
      "Yes, our app provides a platform for secure and confidential communication with licensed therapists or counselors. You can schedule video or audio sessions or exchange messages based on your preferences.",
  },
];

const FAQLanding = () => {
  return (
    <section className="FAQLandingGlobalContainer ">
    <div className="container ">
    <div className="row ">
      <div className="FAQLandingGlobalContainerTop col col-md-3">
        <h1 className="contentType" style={{fontSize:'45px',fontWeight:'900'}}>FAQ</h1>
        <p>Have Some Questions? </p>
        <p>We may already have answers.</p>
      </div>
      <div className="FAQLandingGlobalContainerInner">
        {FAQnotes.map((FAQnote, index) => {
          return <FAQCard key={index} FAQnote={FAQnote} />;
        })}
      </div>
      </div>
    </div>
    </section>
  );
};

export default FAQLanding;
