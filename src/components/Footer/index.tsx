import { Avatar } from 'antd';
import { FC } from 'react';
import { WrapperFooter, Border } from './styled';

export const Footer: FC = () => (
  <>
    <WrapperFooter>
      <Border>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <Avatar
            size={54}
            src="https://s.dou.ua/CACHE/images/img/announces/rs-school/1062e890062f840b9ccbfdd510ae4410.jpg"
          >
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
