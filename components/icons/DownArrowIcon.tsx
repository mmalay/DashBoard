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
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </svg>
  );
};

export default Icon;
