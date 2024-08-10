import { FC } from "react";
import {
  Flex,
  Box,
  SectionSubheader,
  LongParagraph,
  SmallText,
  PurplePillButtonClient,
  FormButton,
} from "@/components/core/ui";
import {
  contactUsVerbiage,
  contactUsFooterVerbiage,
} from "@/data/hero/constants";
import InputLabel from "@/components/core/forms/atoms/InputLabel";
import TextArea from "@/components/core/forms/atoms/TextArea";
import TextInput from "@/components/core/forms/atoms/TextInput";

const ContactForm: FC = () => {
  return (
    <Flex containerClassName="container px-5 py-24 mx-auto flex s">
      <Flex containerClassName="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md bg-white-0 space-y-2">
        <SectionSubheader text="Contact Us" />
        <LongParagraph containerClassName="text-gray-600">
          {contactUsVerbiage}
        </LongParagraph>
        <Box>
          <InputLabel label="Email" htmlFor="email" />
          <TextInput type="email" id="email" name="email" />
        </Box>
        <TextArea id="contact-message" label="Message" />
        <Flex containerClassName="flex justify-end">
          <FormButton className="text-purple-500 hover:underline">
            Submit
          </FormButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
