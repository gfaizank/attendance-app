import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Button from "@mui/material/Button";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const Navbar = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      <div className="flex items-center p-4 bg-white">
        <ArrowBackOutlinedIcon className="font-bold" />
        <div className="ml-8 font-bold">Faizan Khan</div>
        <div className="ml-auto">
          <Button
            className="bg-[#07cba4] text-white"
            style={{ textTransform: "none" }}
          >
            <PictureAsPdfOutlinedIcon className="mr-1" />
            Biodata
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 relative">
        <div className="bg-red-500 rounded-full p-12 w-32 h-32 relative">
          <span className="text-white text-7xl font-bold flex items-center justify-center relative z-10 h-full">
            F
          </span>
          <div className="absolute -bottom-4 -right-4 mr-4 mb-4">
            <div className="bg-white rounded-full border p-1.5">
              <CameraAltOutlinedIcon
                style={{ color: "#07cba4", fontSize: "1.5rem" }}
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-3">Faizan Khan</h2>
        <h4 className="text-md mt-2">+91-8765483471</h4>
      </div>
      
      <div className="bg-white rounded-md mx-2 mt-4 h-36 flex flex-col">
        <div className="mt-3 flex items-center">
        <AccessibilityOutlinedIcon className="ml-4" />
        <div className="ml-4 text-gray-500 text-md">Personal Details</div>
        <KeyboardArrowRightOutlinedIcon className="text-gray-500 mr-2 ml-auto" />
        </div>
        <hr className="border-t border-gray-300 w-full mt-3" />
        <div className="mt-3 flex items-center">
        <BadgeOutlinedIcon className="ml-4" />
        <div className="ml-4 text-gray-500 text-md">Identity Proofs</div>
        <KeyboardArrowRightOutlinedIcon className="text-gray-500 mr-2 ml-auto" />
        </div>
        <hr className="border-t border-gray-300 w-full mt-3" />
        <div className="mt-3 flex items-center">
        <WorkOutlineOutlinedIcon className="ml-4" />
        <div className="ml-4 text-gray-500 text-md">Current Employment</div>
        <KeyboardArrowRightOutlinedIcon className="text-gray-500 mr-2 ml-auto" />
        </div>
      </div>

      <div className="bg-white rounded-md mx-2 mt-6 h-12 flex items-center">
        <AccountBalanceOutlinedIcon className="ml-4" />
        <div className="ml-4 text-gray-500 text-md">Bank Details</div>
        <KeyboardArrowRightOutlinedIcon className="ml-auto mr-2 text-gray-500" />
      </div>

      <div className="bg-white rounded-md mx-2 mt-3 h-12 flex items-center">
        <PermIdentityOutlinedIcon className="ml-4" />
        <div className="ml-4 text-gray-500 text-md">User Permission</div>
        <div className="ml-auto mr-2 text-sm text-gray-500">Employee</div>
        <KeyboardArrowRightOutlinedIcon className="text-gray-500 mr-2" />
      </div>

      <div className="bg-white rounded-md mx-2 mt-3 h-12 flex items-center">
        <FingerprintOutlinedIcon className="ml-4" />
        <div className="ml-4 text-gray-500 text-md">Attendance Details</div>
        <KeyboardArrowRightOutlinedIcon className="ml-auto mr-2 text-gray-500" />
      </div>
    </div>
  );
};

export default Navbar;
