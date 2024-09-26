import FiltroCard from "../../components/FiltroCards"

import * as S from "./styles"


const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtro>
        <FiltroCard />
        <FiltroCard ativo />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
      </S.Filtro>

    </div>
  </S.Aside>
)
export default BarraLateral
