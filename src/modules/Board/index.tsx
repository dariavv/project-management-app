import { FC } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import * as Styled from './styled';

const Board: FC = () => (
  <Styled.Board>
    <Styled.BoardColumns>
      <Styled.HeaderBoard>
        <div> TITLE TASK</div>
        <div>
          <Styled.IconContainer>
            <PlusOutlined style={{ padding: '0 15px 0 0' }} />
            <DeleteOutlined />
          </Styled.IconContainer>
        </div>
      </Styled.HeaderBoard>
      <Styled.Column>
        <ul>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
        </ul>
        <footer>Add another tack</footer>
      </Styled.Column>
    </Styled.BoardColumns>
    <Styled.BoardColumns>
      <Styled.Column>
        <header>Title</header>
        <ul>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
        </ul>
        <footer>Add another tack</footer>
      </Styled.Column>
    </Styled.BoardColumns>
    <Styled.BoardColumns>
      <Styled.Column>
        <header>Title</header>
        <ul>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
        </ul>
        <footer>Add another tack</footer>
      </Styled.Column>
    </Styled.BoardColumns>
    <Styled.BoardColumns>
      <Styled.Column>
        <header>Title</header>
        <ul>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
        </ul>
        <footer>Add another tack</footer>
      </Styled.Column>
    </Styled.BoardColumns>
    <Styled.BoardColumns>
      <Styled.Column>
        <header>Title</header>
        <ul>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
        </ul>
        <footer>Add another tack</footer>
      </Styled.Column>
    </Styled.BoardColumns>
    <Styled.BoardColumns>
      <Styled.Column>
        <header>Title</header>
        <ul>
          <li>tack1</li>
          <li>tack1</li>
          <li>tack1</li>
        </ul>
        <footer>Add another tack</footer>
      </Styled.Column>
    </Styled.BoardColumns>
  </Styled.Board>
);

export default Board;

{
  /* <Styled.Board>
<Styled.BoardColumns>
  <Styled.Column>
    <header>Title</header>
    <ul>
      <li>tack1</li>
      <li>tack1</li>
      <li>tack1</li>
    </ul>
    <footer>Add another tack</footer>
  </Styled.Column>
</Styled.BoardColumns>
<Styled.BoardColumns>
  <Styled.Column>
    <header>Title</header>
    <ul>
      <li>tack1</li>
      <li>tack1</li>
      <li>tack1</li>
    </ul>
    <footer>Add another tack</footer>
  </Styled.Column>
</Styled.BoardColumns>
</Styled.Board> */
}
