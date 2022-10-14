import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";

export default function GeneralQuestions() {
  const [handleSignup, sethandleSignup] = useState(false);
  const [handleLogin, sethandleLogin] = useState(false);
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
        <p>
          <strong>
            <span className="underline text-[25px] text-[#000]">
              General Questions :
            </span>
          </strong>
        </p>
        <p>
          <span style={{ textDecoration: "underline" }}>&nbsp;</span>
        </p>
        <p>What can I sell on Venture Games?</p>
        <p>&nbsp;You can sell New and Used gaming products.</p>
        <p>&nbsp;</p>
        <p>&nbsp;What do I need to sell on Venture Games?</p>
        <p>
          &nbsp;You will need a product, a pick-up address, and payment details
          to sell on Venture Games.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;Can I use my credit card on the PlayStation network?</p>
        <p>
          &nbsp;No, you can't because Sony has restricted region connectivity.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;Differences in PlayStation 5 model?</p>
        <p>
          The most significant aspect of the new PS5 model is its significantly
          smaller heatsink.
        </p>
        <p>&nbsp;</p>
        <p>What are Regions 2 and All?&nbsp;</p>
        <p>
          &nbsp;This refers to the region of the game. You see, games are
          released in different parts of the globe. This code lets you know
          where the game was released/distributed. In Pakistan, most games are
          region 2 from UAE. In PlayStation, you can play region 2 discs in any
          of the PlayStation account regions. However, suppose you like to add
          on the content or Downloadable Content (DLC) and code mentioned in the
          disc. In that case, you need to have the same account of the region of
          the disc, like if you have the disc in region 2 (UAE), so your account
          is also the same for region 2 to use the code and add on content or
          DLC. In Region all Disc (USA), you can use code and DLC to any region
          account.
        </p>
        <p>&nbsp;</p>
        <p>What region account should I create?</p>
        <p>
          In Pakistan, we are recommended to create a US account due to low
          pricing compared to the UK and UAE. These three are readily available
          in Pakistan.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>Can I change my account's region or state?</p>
        <p>No, you can't change the region, but the state can be changed.</p>
        <p>&nbsp;</p>
        <p>Is it necessary to buy the Same region code?</p>
        <p>
          Yes, buying the same region code you created in the PlayStation
          network is always necessary.
        </p>
        <p>&nbsp;</p>
        <p>
          &nbsp;Is it necessary to have the same region's console and
          PlayStation network account?
        </p>
        <p>
          &nbsp;No, the console region has nothing to do with your PlayStation
          Network account; you can create any region account from your console.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;PlayStation membership directly code available?</p>
        <p>
          You have two options to buy a PlayStation membership. The first one is
          to buy a membership with a gift card, which costs more than the second
          option. The second option is buying PlayStation essential code and
          updating extra or premium membership from the gift card. Directly PS
          extra and premium codes are available.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;Does region matter for PS4 and Ps5 games?&nbsp;</p>
        <p>
          &nbsp;PlayStation games can be played on any PlayStation system from
          any region. Game add-on content availability is based on the
          country/region associated with the country in which your account on
          the PlayStation Network was created. This includes downloadable
          content (DLC) and items that can be consumed (in-game currency).
        </p>
        <p>
          To ensure you will be able to access your add-on content and DLC, make
          sure the next match:
        </p>
        <p>
          The country/region your account on the PlayStation Network was
          created.
        </p>
        <p>The game disc country/region.</p>
        <p>The add-on country/region.</p>
        <p>
          If the 3 areas above do not match, you will not be able to access any
          of the add-on content for the game.
        </p>
        <p>
          To avoid this, before purchasing a game disc, ensure that the country
          matches the PlayStation Store country you will be used to purchase
          add-on content.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>What is the New Product warranty in Pakistan?</p>
        <p>
          All new product has an international warranty which is claimable in
          the same region or country, and in Pakistan, no official warranty has
          been claimed.
        </p>
        <p>&nbsp;</p>
        <p>What is the warranty time Digital Product:</p>
        <p>&nbsp;There are no applicable warranty terms.</p>
        <p>&nbsp;</p>
        <p>What is the warranty time of pre-owned product?</p>
        <p>&nbsp;</p>
        <p>Games:</p>
        <p>
          Pre-owned Games warranty time three days. (After receiving a product)
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;Pre-Owned Accessories:</p>
        <p>
          &nbsp;Pre-owned accessories warranty time is three days. (After
          receiving a product)
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Pre-Owned Console:</p>
        <p>
          &nbsp;Pre-owned console warranty time 15 days. (After receiving a
          product)
        </p>
        <p>&nbsp;</p>
        <p>Repaired Product:</p>
        <p>
          Repaired product warranty time 7 days. (After receiving a product).
        </p>
      </div>
    </>
  );
}
