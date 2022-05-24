import { FC, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Loader } from 'components';
import { BoardItem } from './BoardItem';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllBoards } from 'store/reducers/boardsSlice';
import { ThemeMedia } from 'theme';
import { useTranslations } from 'hooks/useTranslations';
import * as Styled from './styled';

const Main: FC = () => {
  const { boards, status } = useAppSelector((state) => state.boards);
  const { t } = useTranslations('main');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <Styled.Main theme={ThemeMedia}>
      {!boards.length && (
        <Styled.NoBoards>
          <p>{t('no_boards')}</p>
          <p>{t('please_create')}</p>
        </Styled.NoBoards>
      )}
      {boards.length && (
        <Row gutter={[16, 16]}>
          {boards.map(({ id, title, description }) => (
            <Col
              key={id}
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
              className="gutter-row"
            >
              <BoardItem id={id} title={title} description={description} />
            </Col>
          ))}
        </Row>
      )}
    </Styled.Main>
  );
};

export default Main;
