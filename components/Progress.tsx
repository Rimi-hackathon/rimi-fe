import { FaCaretUp, FaCheck } from "react-icons/fa6";

interface ProgressProps {
  text: string;
  step: string;
}

const Progress = ({ text, step }: ProgressProps) => {
  return (
    <div className="relative flex w-full items-center justify-between">
      {[0, 1, 2, 3, 4].map((item) => {
        const cur = Number(step);
        if (item === cur) {
          if (item === 4) {
            return (
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary p-2">
                <div className="h-full w-full rounded-full bg-primary" />
                <div className="absolute -bottom-10 flex flex-col items-center">
                  <FaCaretUp className="-mb-0.5 text-sm text-primary" />
                  <div className="whitespace-nowrap rounded-full bg-primary p-1 px-2 text-xs text-white text-opacity-80">
                    {text}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <>
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary p-2">
                <div className="h-full w-full rounded-full bg-primary" />
                <div className="absolute -bottom-10 flex flex-col items-center">
                  <FaCaretUp className="-mb-0.5 text-sm text-primary" />
                  <div className="whitespace-nowrap rounded-full bg-primary p-1 px-2 text-xs text-white text-opacity-80">
                    {text}
                  </div>
                </div>
              </div>
              <div className="w-full border-t-2 border-white opacity-70" />
            </>
          );
        }
        if (item < cur) {
          return (
            <>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-lg text-white">
                <FaCheck />
              </div>
              <div className="w-full border-t-2 border-primary" />
            </>
          );
        }
        if (item === 4) {
          return (
            <>
              <div className="h-8 w-8 shrink-0 rounded-full border-2 border-white opacity-70" />
            </>
          );
        } else {
          return (
            <>
              <div className="h-8 w-8 shrink-0 rounded-full border-2 border-white opacity-70" />
              <div className="w-full border-t-2 border-white opacity-70" />
            </>
          );
        }
      })}
    </div>
  );
};

export default Progress;
