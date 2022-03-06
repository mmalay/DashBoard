import { useState } from 'react';
import { useRouter } from 'next/router';
import MenuOpen from './icons/MenuOpen';
import Person from './icons/Person';
import AllIFeaturesIcon from './icons/AllIFeaturesIcon';
import HandWash from './icons/HandWashIcon';
import Bell from './icons/Bell';
import SupportIcon from './icons/SupportIcon';
import VideoCam from './icons/VideoCamIcon';
import ThumbsUp from './icons/ThumbsUpIcon';
import SafetyIcon from './icons/SafetyIcon';
import Star from './icons/Star';
import DownArrowIcon from './icons/DownArrowIcon';
import RightArrowIcon from './icons/RightArrowIcon';
import Add from './icons/Add';

type Props = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

export default function Drawer({ isOpen, toggleDrawer }: Props) {
  const [isAllFeatureMenuOpen, setIsAllFeatureMenuOpen] = useState(true);
  const [isHygieneMenuOpen, setIsHygieneMenuOpen] = useState(false);
  const [isSafetyMenuOpen, setIsSafetyMenuOpen] = useState(false);
  const [isQualityMenuOpen, setIsQualityMenuOpen] = useState(false);
  const [isLifeViewMenuOpen, setIsLifeViewMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className={
        'top-0 left-0 w-96 h-full overflow-hidden bg-zinc-800 mb-28' +
        ' flex flex-col justify-between inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-all opacity-100 duration-300 translate-x-0 p-6 '
          : ' transition-all opacity-100 duration-300 delay-150 -translate-x-full w-0')
      }
    >
      <section>
        <div className="flex">
          <MenuOpen styles="fill-current text-gray-50" onClick={toggleDrawer} />
          <span
            className="text-gray-50 ml-1.5 cursor-pointer"
            onClick={() => router.push('/')}
          >
            OpenEye.ai
          </span>
        </div>
        <section className="mt-16 flex flex-col gap-3">
          <div className="flex items-center">
            <Person styles="fill-current text-gray-50" />
            <span className="text-gray-50 ml-1.5">PROFILE</span>
          </div>
          <div>
            <div
              className="flex justify-between "
              onClick={() => setIsAllFeatureMenuOpen(!isAllFeatureMenuOpen)}
            >
              <div className={'flex items-center'}>
                <AllIFeaturesIcon styles="fill-current text-gray-50" />
                <span className="text-gray-50 ml-1.5">ALL FEATURES</span>
              </div>
              {isAllFeatureMenuOpen ? (
                <DownArrowIcon styles="fill-current text-gray-50" />
              ) : (
                <RightArrowIcon styles="fill-current text-gray-50" />
              )}
            </div>
            {isAllFeatureMenuOpen ? (
              <div className="flex flex-col ml-4 gap-2">
                <div className="flex flex-col">
                  <div
                    className="flex justify-between"
                    onClick={() => {
                      setIsHygieneMenuOpen(!isHygieneMenuOpen);
                      router.push('/hygiene');
                    }}
                  >
                    <div className={'flex items-center '}>
                      <HandWash styles="fill-current text-gray-50" />
                      <span className="text-gray-50 ml-1.5">HYGIENE</span>
                    </div>
                    {isHygieneMenuOpen ? (
                      <DownArrowIcon styles="fill-current text-gray-50" />
                    ) : (
                      <RightArrowIcon styles="fill-current text-gray-50" />
                    )}
                  </div>
                  {isHygieneMenuOpen ? (
                    <section className="flex flex-col ml-2.5 gap-1 my-1 mr-4">
                      <div className="flex">
                        <div className="flex gap-2 justify-between w-full mr-1.5">
                          <span className="text-sm text-gray-50 ml-1.5">
                            HYGIENE INDEX
                          </span>
                          <Add styles="fill-current text-gray-50" />
                        </div>
                        <Star styles="fill-current text-gray-50" />
                      </div>

                      <div className="flex gap-2 justify-between mr-[1.59rem]">
                        <span className="text-sm text-gray-50 ml-1.5">
                          FLOOR MOPPING
                        </span>
                        <Add styles="fill-current text-gray-50" />
                      </div>
                      <div className="flex gap-2 justify-between mr-[1.59rem]">
                        <span className="text-sm text-gray-50 ml-1.5">
                          20 SEC HANDWASH RULE
                        </span>
                        <Add styles="fill-current text-gray-50" />
                      </div>
                    </section>
                  ) : null}
                </div>
                <div
                  className="flex justify-between"
                  onClick={() => setIsSafetyMenuOpen(!isSafetyMenuOpen)}
                >
                  <div className="flex items-center">
                    <SafetyIcon styles="fill-current text-gray-50" />
                    <span className="text-gray-50 ml-1.5">SAFETY</span>
                  </div>
                  {isSafetyMenuOpen ? (
                    <DownArrowIcon styles="fill-current text-gray-50" />
                  ) : (
                    <RightArrowIcon styles="fill-current text-gray-50" />
                  )}
                </div>
                <div
                  className="flex justify-between"
                  onClick={() => setIsQualityMenuOpen(!isQualityMenuOpen)}
                >
                  <div className="flex">
                    <ThumbsUp styles="fill-current text-gray-50" />
                    <span className="text-gray-50 ml-1.5">QUALITY</span>
                  </div>
                  {isQualityMenuOpen ? (
                    <DownArrowIcon styles="fill-current text-gray-50" />
                  ) : (
                    <RightArrowIcon styles="fill-current text-gray-50" />
                  )}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="flex justify-between"
            onClick={() => setIsLifeViewMenuOpen(!isLifeViewMenuOpen)}
          >
            <div className="flex items-center">
              <VideoCam styles="fill-current text-gray-50" />
              <span className="text-gray-50 ml-1.5">LIVE VIEW</span>
            </div>
            {isLifeViewMenuOpen ? (
              <DownArrowIcon styles="fill-current text-gray-50" />
            ) : (
              <RightArrowIcon styles="fill-current text-gray-50" />
            )}
          </div>
        </section>
      </section>
      <section>
        <div className="flex mb-4">
          <Bell styles="fill-current text-gray-50" />
          <span className="text-gray-50 ml-1.5">OUTLET NOTIFICATION</span>
        </div>
        <div className="flex mb-14">
          <SupportIcon styles="fill-current text-gray-50" />
          <span className="text-gray-50 ml-1.5">SUPPORT</span>
        </div>
      </section>
    </div>
  );
}
