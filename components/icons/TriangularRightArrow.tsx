import { FC } from 'react';

type Props = {
  styles: string;
};

const Icon: FC<Props> = ({ styles }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="28px"
      viewBox="0 0 24 24"
      width="28px"
      fill="#000000"
      className={styles}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10 17l5-5-5-5v10z" />
    </svg>
  );
};

export default Icon;
