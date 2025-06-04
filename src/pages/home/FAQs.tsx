import { Section, Header, Heading, Paragraph } from "@/components/picture-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to make a reservation?",
    answer:
      "While walk-ins are welcome, we highly recommend making a reservation, especially on weekends or holidays, to ensure we can accommodate you without delay.",
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Absolutely! Our menu includes a variety of vegetarian and vegan dishes crafted with fresh, locally sourced ingredients to satisfy all dietary preferences.",
  },
  {
    question: "Are you family-friendly?",
    answer:
      "Yes, we are! We have a kid-friendly menu, high chairs, and a warm atmosphere perfect for family dining.",
  },
  {
    question: "Do you cater for private events or parties?",
    answer:
      "Yes, we do! Whether it’s a birthday, anniversary, or corporate event, we offer custom catering and private dining experiences tailored to your needs.",
  },
  {
    question: "Where are you located and what are your hours?",
    answer:
      "We’re located in the heart of Karen, Nairobi. Our opening hours are Monday to Sunday, from 11:00 AM to 10:00 PM.",
  },
];

const FAQs = () => {
  return (
    <Section aria-labelledby="faq-label" className="bg-smooth">
      <Header>
        <Heading>Frequenty Asked Questions</Heading>
        <Paragraph>Get all of your questions answered</Paragraph>
      </Header>
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <Accordion type="single" collapsible className="px-4 gap-2 grow-1">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}.</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQs;
