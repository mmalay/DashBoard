import { FC } from 'react';

type Props = {
  styles: string;
};

const Icon: FC<Props> = ({ styles }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
      className={styles}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  );
};

export default Icon;
