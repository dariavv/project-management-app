import { Avatar } from 'antd';
import { FC } from 'react';
import { WrapperFooter, Border } from './styled';
import rssLogo from 'assets/images/RSLogo.jpg';

export const Footer: FC = () => (
  <>
    <WrapperFooter>
      <Border>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <Avatar size={54} src={rssLogo}>
            RS
          </Avatar>
        </a>
        <p>© 2022</p>
        <Avatar.Group
          maxPopoverTrigger="click"
          size="large"
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
        >
          <a href="https://github.com/dariavv" target="_blank" rel="noreferrer">
            <Avatar style={{ backgroundColor: '#56D667' }}>Daria</Avatar>
          </a>
          <a href="https://github.com/GBaykov" target="_blank" rel="noreferrer">
            <Avatar style={{ backgroundColor: '#6BB7FF' }}>Gleb</Avatar>
          </a>
          <a href="https://github.com/Olga-plus" target="_blank" rel="noreferrer">
            <Avatar style={{ backgroundColor: '#CDFD5D' }}>Olga</Avatar>
          </a>
        </Avatar.Group>
      </Border>
    </WrapperFooter>
  </>
);
