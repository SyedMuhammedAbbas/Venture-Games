import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function GeneralQuestions() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
  const [FAQ, setFAQ] = useState(false);

  function handleFAQ() {
    {
      setFAQ(FAQ !== true);
    }
  }

  const QA = [
    {
      id: 1,
      question: "What can I sell on Venture Games?",
      answer: "You can sell New and Used gaming products.",
    },
    {
      id: 2,
      question: " What do I need to sell on Venture Games?",
      answer:
        "You will need a product, a pick-up address, and payment details to sell on Venture Games.",
    },
    {
      id: 3,
      question: "Can I use my credit card on the PlayStation network?",
      answer: "No, you can't because Sony has restricted region connectivity.",
    },
    {
      id: 4,
      question: "Differences in PlayStation 5 model?",
      answer:
        "The most significant aspect of the new PS5 model is its significantly smaller heatsink.",
    },
    {
      id: 5,
      question: "What are Regions 2 and All? ",
      answer:
        "This refers to the region of the game. You see, games are released in different parts of the globe. This code lets you know where the game was released/distributed. In Pakistan, most games are region 2 from UAE. In PlayStation, you can play region 2 discs in any of the PlayStation account regions. However, suppose you like to add on the content or Downloadable Content (DLC) and code mentioned in the disc. In that case, you need to have the same account of the region of the disc, like if you have the disc in region 2 (UAE), so your account is also the same for region 2 to use the code and add on content or DLC. In Region all Disc (USA), you can use code and DLC to any region account.",
    },
    {
      id: 6,
      question: "What region account should I create?",
      answer:
        "In Pakistan, we are recommended to create a US account due to low pricing compared to the UK and UAE. These three are readily available in Pakistan.",
    },
    {
      id: 7,
      question: "Can I change my account's region or state?",
      answer: "No, you can't change the region, but the state can be changed.",
    },
    {
      id: 8,
      question: "Is it necessary to buy the Same region code?",
      answer:
        "Yes, buying the same region code you created in the PlayStation network is always necessary.",
    },
    {
      id: 9,
      question:
        "Is it necessary to have the same region's console and PlayStation network account?",
      answer:
        "No, the console region has nothing to do with your PlayStation Network account; you can create any region account from your console.",
    },
    {
      id: 10,
      question: " PlayStation membership directly code available?",
      answer:
        "You have two options to buy a PlayStation membership. The first one is to buy a membership with a gift card, which costs more than the second option. The second option is buying PlayStation essential code and updating extra or premium membership from the gift card. Directly PS extra and premium codes are available.",
    },
    {
      id: 11,
      question: "Does region matter for PS4 and Ps5 games? ",
      answer:
        "PlayStation games can be played on any PlayStation system from any region. Game add-on content availability is based on the country/region associated with the country in which your account on the PlayStation Network was created. This includes downloadable content (DLC) and items that can be consumed (in-game currency). To ensure you will be able to access your add-on content and DLC, make sure the next match: The country/region your account on the PlayStation Network was created.The game disc country/region.The add-on country/region.If the 3 areas above do not match, you will not be able to access any of the add-on content for the game. To avoid this, before purchasing a game disc, ensure that the country matches the PlayStation Store country you will be used to purchase add-on content. ",
    },
    {
      id: 12,
      question: "What is the New Product warranty in Pakistan?",
      answer:
        "All new product has an international warranty which is claimable in the same region or country, and in Pakistan, no official warranty has been claimed.",
    },
    {
      id: 13,
      question: "What is the warranty time Digital Product:",
      answer: "There are no applicable warranty terms.",
    },
    {
      id: 14,
      question: "What is the warranty time of pre-owned product?",
      answer:
        "Games: Pre-owned Games warranty time three days. (After receiving a product) Pre-Owned Accessories: Pre-owned accessories warranty time is three days. (After receiving a product) Pre-Owned Console: Pre-owned console warranty time 15 days. (After receiving a product) Repaired Product: Repaired product warranty time 7 days. (After receiving a product). ",
    },
  ];
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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] tablet:pt-[20%] tablet:px-5 snap-start">
        <ul className="flex flex-wrap justify-center gap-10 pb-20">
          <Link href="/help/technicalIssues">
            <li className="border border-black text-[#000] rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
              <span>Technical Issues </span>
            </li>
          </Link>
          {/* <Link href="/help/generalQuestions"> */}
          <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[25px] px-5 py-3 cursor-pointer">
            <span>General Questions</span>
          </li>
          {/* </Link> */}
        </ul>

        {/* </div> */}
        {QA.map((index) => {
          return (
            <>
              <div
                className="grid gap-5  w-[100%] py-5"
                key={index.id}
                onClick={() => handleFAQ()}
              >
                <div className="flex items-center bg-[#282828] relative h-[80px] px-[3%] rounded-[25px] shadow-2xl">
                  <div className="text-white text-[30px] ">
                    {index.question}
                  </div>
                  {FAQ ? (
                    <button className="absolute right-20 text-[25px] text-white">
                      <MdKeyboardArrowDown />
                    </button>
                  ) : (
                    <button className="absolute right-20 text-[25px] text-white">
                      <MdKeyboardArrowRight />
                    </button>
                  )}
                </div>
                {FAQ ? (
                  <div
                    key={index.id}
                    className="flex gap-10 text-center justify-center items-center text-white bg-[#3a3a3a] relative px-[3%] py-[4%] rounded-[25px] shadow-2xl"
                  >
                    {index.answer}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
