import React from "react";
// importing icons
import {
  LinkIcon,
  ViewGridIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
// for animations
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    //   fixing the footer at the bottom of the all other components
    <div className="relative mt-20">
      <Fade up>
        <div class="absolute inset-x-0 bottom-0">
          <hr />
          <div className="flex justify-between items-center px-8 py-3">
            <div>
              <LinkIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
            </div>
            <div>
              <div className="w-full flex justify-end space-x-4">
                <ViewGridIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
                <QuestionMarkCircleIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
