import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
// import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

export default function TechnicalIssues() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [FAQ, setFAQ] = useState();

  function handleFAQ(id) {
    if (FAQ !== undefined) {
      setFAQ(undefined);
    } else {
      setFAQ(id);
    }
  }

  const data = {
    rows: [
      {
        title: "What can I sell on Venture Games?",
        content: "You can sell New and Used gaming products.",
      },
      {
        title: " What do I need to sell on Venture Games?",
        content:
          "You will need a product, a pick-up address, and payment details to sell on Venture Games.",
      },
      {
        title: "Can I use my credit card on the PlayStation network?",
        content:
          "No, you can't because Sony has restricted region connectivity.",
      },
      {
        title: "Differences in PlayStation 5 model?",
        content:
          "The most significant aspect of the new PS5 model is its significantly smaller heatsink.",
      },
      {
        title: "What are Regions 2 and All? ",
        content:
          "This refers to the region of the game. You see, games are released in different parts of the globe. This code lets you know where the game was released/distributed. In Pakistan, most games are region 2 from UAE. In PlayStation, you can play region 2 discs in any of the PlayStation account regions. However, suppose you like to add on the content or Downloadable Content (DLC) and code mentioned in the disc. In that case, you need to have the same account of the region of the disc, like if you have the disc in region 2 (UAE), so your account is also the same for region 2 to use the code and add on content or DLC. In Region all Disc (USA), you can use code and DLC to any region account.",
      },
      {
        title: "What region account should I create?",
        content:
          "In Pakistan, we are recommended to create a US account due to low pricing compared to the UK and UAE. These three are readily available in Pakistan.",
      },
      {
        title: "Can I change my account's region or state?",
        content:
          "No, you can't change the region, but the state can be changed.",
      },
      {
        title: "Is it necessary to buy the Same region code?",
        content:
          "Yes, buying the same region code you created in the PlayStation network is always necessary.",
      },
      {
        title:
          "Is it necessary to have the same region's console and PlayStation network account?",
        content:
          "No, the console region has nothing to do with your PlayStation Network account; you can create any region account from your console.",
      },
      {
        title: " PlayStation membership directly code available?",
        content:
          "You have two options to buy a PlayStation membership. The first one is to buy a membership with a gift card, which costs more than the second option. The second option is buying PlayStation essential code and updating extra or premium membership from the gift card. Directly PS extra and premium codes are available.",
      },
      {
        title: "Does region matter for PS4 and Ps5 games? ",
        content:
          "PlayStation games can be played on any PlayStation system from any region. Game add-on content availability is based on the country/region associated with the country in which your account on the PlayStation Network was created. This includes downloadable content (DLC) and items that can be consumed (in-game currency). To ensure you will be able to access your add-on content and DLC, make sure the next match: The country/region your account on the PlayStation Network was created.The game disc country/region.The add-on country/region.If the 3 areas above do not match, you will not be able to access any of the add-on content for the game. To avoid this, before purchasing a game disc, ensure that the country matches the PlayStation Store country you will be used to purchase add-on content. ",
      },
      {
        title: "What is the New Product warranty in Pakistan?",
        content:
          "All new product has an international warranty which is claimable in the same region or country, and in Pakistan, no official warranty has been claimed.",
      },
      {
        title: "What is the warranty time Digital Product:",
        content: "There are no applicable warranty terms.",
      },
      {
        title: "What is the warranty time of pre-owned product?",
        content:
          "Games: Pre-owned Games warranty time three days. (After receiving a product) Pre-Owned Accessories: Pre-owned accessories warranty time is three days. (After receiving a product) Pre-Owned Console: Pre-owned console warranty time 15 days. (After receiving a product) Repaired Product: Repaired product warranty time 7 days. (After receiving a product). ",
      },
    ],
  };
  const styles = {
    bgColor: "#1A1A1A",
    rowTitleColor: "#FFB636",
    rowTitleTextSize: "25px",
    PaddingLeft: "20px",
    rowContentColor: "#c0c0c0",
    rowContentTextSize: "25px",
    rowContentPaddingTop: "10px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
    rowContentPaddingRight: "150px",
    arrowColor: "white",
    transitionDuration: "0.3s",
  };

  const config = {
    // animate: true,
    // arrowIcon: <MdKeyboardArrowRight />,
    tabFocus: true,
    expandIcon: <MdKeyboardArrowRight />,
    collapseIcon: <MdKeyboardArrowUp />,
  };
  return (
    <>
      <div className="snap-start">
        <ProfileBar
          cartshow={true}
          handleLogin={handleLogin}
          sethandleLogin={sethandleLogin}
          handleSignup={handleSignup}
          sethandleSignup={sethandleSignup}
        />
      </div>
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[125vh] max-h-[100%] tablet:pt-[10%] tablet:px-5">
        <ul className="flex flex-wrap justify-center gap-10 pb-20">
          {/* <Link href="/help/technicalIssues"> */}
          <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[30px] mobile:text-[25px] mobile1:w-[250px] flex justify-center h-[80px] items-center px-5 py-3 cursor-pointer">
            <span>Technical Issues </span>
          </li>
          {/* </Link> */}
          <Link href="/help/generalQuestions">
            <li className="border border-black text-[#000] rounded-[10px] text-[30px] mobile:text-[25px] mobile1:w-[250px] flex justify-center h-[80px] items-center px-5 py-3 cursor-pointer">
              <span>General Questions</span>
            </li>
          </Link>
        </ul>

        <p>
          <strong>
            <span className="underline text-[25px] text-[#000]">
              Technical Issue:
            </span>
          </strong>
        </p>
        <p>&nbsp;&nbsp;</p>
        <p>
          <strong>Games:</strong>
        </p>
        <p>&nbsp;Console disc (DVD) error?</p>
        <p>Make sure the disc you can use has no bunch of scratches.</p>
        <p>Clean the disc with a soft cloth to remove dirt or prints.&nbsp;</p>
        <p>Try to Reinstall the game.</p>
        <p>
          If you've tried the steps above and your console still can't read the
          discs, try multiple DVDs in your system, and if you have been facing
          the same issue in other DVDs, that means your console lance (ROM) has
          weak.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;<strong>What Causes PlayStation Overheating?</strong>
        </p>
        <p>
          When your PS4 is overheating, you'll usually see a message like this:
          "The ps4 is too hot. Turn off the ps4 and wait until the temperature
          goes down."
        </p>
        <p>
          Your PS4 may overheat if the vents and heatsink are blocked by dust or
          if there isn't enough clearance between the vents and other objects.
          The PS4 will also tend to overheat if the thermal paste has dried. The
          temperature in your room can also have an effect.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>How to Resolve PlayStation Overheating issue?</strong>
        </p>
        <p>
          Clean your console of the dust and reapply the thermal paste. (Thermal
          paste is a silver liquid you apply to a processor to transfer heat to
          a cooling solution.)&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;<strong>Should I replace the analog caps?</strong>&nbsp;
        </p>
        <p>
          &nbsp;Yes, you can, but both caps have changed due to color
          differences.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;<strong>Is drifting issue can be repairable?</strong>
        </p>
        <p>
          <strong>&nbsp;</strong>Yes, if your controller has a drifting issue,
          you can replace it with the other one, but the accuracy is 90 to 95%.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;<strong>Controller button issue?</strong>
        </p>
        <p>
          <strong>&nbsp;</strong>If your controller has some button issue like
          completely not responding or pressing continuously, it would be needed
          to replace the conductive film/Ribbon.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;<strong>Controller Charging Issue?</strong>
        </p>
        <p>
          <strong>&nbsp;</strong>It has multiple reasons to fix this problem.
        </p>
        <p>
          &nbsp;<strong>Battery:</strong>&nbsp;First, check that your controller
          connects with the charging wire, and if it is responding with cable,
          then it means the battery has died.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;<strong>Jack Issue/Flex Cable:</strong>&nbsp;If the controller
          is not responding with wire, the charging jack should be replaceable
          or flex cable (Flex cable connected to the charging jack with the
          circuit).
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Console Issues:</strong>
        </p>
        <p>
          &nbsp;<strong>Power Related issue:</strong>&nbsp;In this type of
          issue, the console has not responded or sometimes blinked the lights
          and shut off, which is related to Power supply or Power ICs. If it is
          shut down in a few minutes, the power supply will probably weaken, and
          the ICs temperature will go high.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>DVD ROM:</strong>
        </p>
        <p>
          &nbsp;If your console has some DVD insert issue and ejecting, that
          means ROM has to be fixed, and if you have any error kind disc may be
          dirty or damaged in multiple DVDs and unrecognized disc that means
          Lens has to be fixed.&nbsp; &nbsp;
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;Ports:&nbsp;</p>
        <p>
          &nbsp;If you face console display issues, HDMI Cable and TV port are
          working perfectly fine, then this issue cause HDMI IC or HDMI
          Port.&nbsp;
        </p>
        <p>
          If the USB ports of the console are not working, the module IC has to
          be fixed.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>PlayStation Common Error Codes:</strong>
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-100005-6/"
            target="_blank"
          >
            CE-100005-6
          </a>
          &nbsp;There is a problem reading a disk or data.
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-107750-0/"
            target="_blank"
          >
            CE-107750-0
          </a>
          &nbsp;A system error has occurred.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-100002-3/"
            target="_blank"
          >
            CE-100002-3
          </a>
          &nbsp;Failed to update the application.
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-108255-1/"
            target="_blank"
          >
            CE-108255-1
          </a>
          &nbsp;An error occurred on the application.&nbsp;&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/np-102946-2/"
            target="_blank"
          >
            NP-102946-2
          </a>
          &nbsp;Please install the latest update file.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-107857-8/"
            target="_blank"
          >
            CE-107857-8
          </a>
          &nbsp;There was a problem loading the application.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-100028-1/"
            target="_blank"
          >
            CE-100028-1
          </a>
          &nbsp;There is not enough free space on the SSD.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ce-106485-4/"
            target="_blank"
          >
            CE-106485-4
          </a>
          &nbsp;There may be a problem reading the system software or
          data.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/nw-102311-8/"
            target="_blank"
          >
            NW-102311-8
          </a>
          &nbsp;A communication error has occurred.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps5/ws-116521-6/"
            target="_blank"
          >
            WS-116521-6
          </a>
          &nbsp;This service is currently under maintenance.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/ce-34878-0/"
            target="_blank"
          >
            CE-34878-0
          </a>
          &nbsp;An error has occurred with the application.&nbsp;
        </p>
        <p>
          &nbsp;
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/ce-30005-8/"
            target="_blank"
          >
            CE-30005-8
          </a>
          &nbsp;Error occurred while accessing the Hard Disk Drive ("HDD") or
          Blu-ray / DVD Drive.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/ce-36329-3/"
            target="_blank"
          >
            CE-36329-3
          </a>
          &nbsp;An error has occurred with the system software.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/np-34957-8/"
            target="_blank"
          >
            NP-34957-8
          </a>
          &nbsp;Server communication error.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/su-30746-0/"
            target="_blank"
          >
            SU-30746-0
          </a>
          &nbsp;The system software update has failed.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/ce-32894-6/"
            target="_blank"
          >
            CE-32894-6
          </a>
          &nbsp;The connection to the server has been lost.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/ws-43709-3/"
            target="_blank"
          >
            WS-43709-3
          </a>
          &nbsp;Please check the expiration date of your credit card.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/np-36006-5/"
            target="_blank"
          >
            NP-36006-5
          </a>
          &nbsp;Your trophy data may be corrupted.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/su-41350-3/"
            target="_blank"
          >
            SU-41350-3
          </a>
          &nbsp;The update file cannot be recognized.&nbsp;
        </p>
        <p>
          <a
            href="https://www.playstation.com/en-us/support/error-codes/ps4/ws-37469-9/"
            target="_blank"
          >
            WS-37469-9
          </a>
          &nbsp;Failed to connect to the server.&nbsp;
        </p>
      </div>
    </>
  );
}
