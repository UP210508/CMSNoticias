import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { Header } from '../../common';
import { dateFormat } from '../../common/helpers/dateFormat';
import { Footer } from '../../common/components/Footer';

const noticeDate = dateFormat(new Date());

export const NoticePage = () => {
  return (
    <div>
      <Header />
      <Container sx={{ margin: '50px auto' }} maxWidth={'md'}>
        <Typography mb={3} variant="h4" component={'h1'} fontWeight={'bold'}>
          Título de la Noticia
        </Typography>
        <Box
          mb={5}
          className="notice-top"
        >
          <Typography>{noticeDate}</Typography>
          <Typography borderBottom={''} fontWeight={'bold'}>
            Publicado por:{' '}
            <Box component="span" fontWeight={'regular'}>
              Danna Sánchez
            </Box>
          </Typography>
        </Box>
        <Box className="notice-image">
          <img src="https://noticias.imer.mx/wp-content/uploads/2022/02/Diseno-sin-titulo.jpg" />
        </Box>
        <Box margin={'0 auto'}>
          <Typography mb={3} lineHeight={1.7}>
            Adipisicing ullamco excepteur ullamco magna esse aute velit deserunt
            anim pariatur commodo ex aliqua amet. Eu non irure nulla fugiat
            magna cupidatat amet amet. Culpa magna ipsum excepteur duis sit.
            Proident incididunt pariatur elit amet commodo exercitation sint
            consectetur ex excepteur irure cupidatat. Magna non ad id consequat
            commodo ex aute officia. Elit aliqua qui tempor sunt dolor laboris.
            Sunt magna fugiat ut proident sit nulla aute consequat nisi. Ex
            aliquip adipisicing ut eu anim aliqua culpa consectetur sit nostrud.
          </Typography>
          <Typography mb={3} lineHeight={1.7}>
            Adipisicing ullamco excepteur ullamco magna esse aute velit deserunt
            anim pariatur commodo ex aliqua amet. Eu non irure nulla fugiat
            magna cupidatat amet amet. Culpa magna ipsum excepteur duis sit.
            Proident incididunt pariatur elit amet commodo exercitation sint
            consectetur ex excepteur irure cupidatat. Magna non ad id consequat
            commodo ex aute officia. Elit aliqua qui tempor sunt dolor laboris.
            Sunt magna fugiat ut proident sit nulla aute consequat nisi. Ex
            aliquip adipisicing ut eu anim aliqua culpa consectetur sit nostrud.
          </Typography>
          <Typography lineHeight={1.7}>
            Aliquip adipisicing qui reprehenderit dolore culpa nostrud nostrud
            commodo aliqua id dolor deserunt do. Ipsum labore elit incididunt
            officia aliqua et. Deserunt in fugiat qui adipisicing
            dolor sint exercitation voluptate sit. Laborum cupidatat commodo magna
            dolore quis deserunt dolor magna non consectetur aute nulla qui. Irure
            nisi mollit proident et voluptate in ea deserunt minim incididunt id
            cupidatat cupidatat.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};
