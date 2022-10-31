import ProfileBar from "../../../components/common/ProfileBar";
import { useState } from "react";
import Link from "next/link";

export default function TechnicalIssues() {
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
      <div className="bg-[#FFB636] text-[25px] mobile:text-[20px] snap-start text-black pt-[10%] px-20 pb-20 min-h-[140vh] mobile:min-h-[100vh] max-h-[100%] tablet:pt-[20%] tablet:px-5">
        <ul className="flex flex-wrap justify-center gap-10">
          {/* <Link href="/help/technicalIssues"> */}
          <li className="border border-black text-[#FFB636] bg-black rounded-[10px] text-[30px] px-5 py-3 cursor-pointer">
            <span>Technical Issues </span>
          </li>
          {/* </Link> */}
          <Link href="/help/generalQuestions">
            <li className="border border-black text-[#000] rounded-[10px] text-[30px] px-5 py-3 cursor-pointer">
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
