
import "./Value.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import { useState } from "react";



const AccordionItemComponent = ({ item, index }) => {
  const [className, setClassName] = useState(null);

  return (
    <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>
      <AccordionItemHeading>
        <AccordionItemButton className='flexCenter accordionButton'>
          <AccordionItemState>
            {({ expanded }) => {
              setClassName(expanded ? 'expanded' : 'collapsed');
              return null; // This is needed because hooks should not return values in a conditional statement
            }}
          </AccordionItemState>
          <div className="flexCenter icon">{item.icon}</div>
          <span className="primaryText">{item.heading}</span>
          <div className="flexCenter icon" size={20}>
            <MdOutlineArrowDropDown />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="secondaryText">{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default function Value() {
  const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./Value-House-1.jpg" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we Give to you</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((acc, i) => (
            <AccordionItemComponent item={acc} index={i} key={i} />
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
}
