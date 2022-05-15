import { FC } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import { TaskItem } from 'components/Task';
import * as Styled from './styled';

const DataColumns = ['TO DO', 'IN PROGRESS', 'DONE'];

type DataColumns = {
  title: string;
};

const Board: FC = () => (
  <Styled.Board>
    {DataColumns.map((item, index) => (
      <Styled.BoardColumns key={`${index}c`}>
        <Styled.HeaderBoard>
          <div> {item}</div>
          <div>
            <Styled.IconContainer>
              <PlusOutlined style={{ padding: '0 15px 0 0' }} />
              <DeleteOutlined />
            </Styled.IconContainer>
          </div>
        </Styled.HeaderBoard>
        {new Array(40).fill(null).map((_, index) => (
          <TaskItem id={index} title={`Task`} description={'Task description'} key={`${index}c`} />
        ))}
      </Styled.BoardColumns>
    ))}

    <Button block>
      <PlusOutlined style={{ padding: '0 15px 0 0' }} /> ADD
    </Button>
  </Styled.Board>
);

export default Board;
