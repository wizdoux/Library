import Button from '../Button';
import Container from '../Container/index.js';
import ProfileIcon from '../ProfileIcon';
import style from './CardBlog.module.css';

export default function CardBlog() {
    return (
        <Container>
            <div className={style.card}>
                <div className={style.info}>
                    <ProfileIcon />
                    <h2 className={style.name}>Nome do autor</h2>
                    <p className={style.date}>3 abril, 2014</p>
                </div>
                <h1 className={style.title}>Você sabe como ler 500 livros por ano? descubra que é muito simples</h1>
                <p className={style.paragraph}>Ler 500 livros em um ano é possível com planejamento e disciplina. Divida o número de livros pelos dias do ano, resultando em cerca de 1,37 livros por dia. Use técnicas como leitura dinâmica e audiolivros para otimizar o tempo. Estabeleça metas diárias e mantenha a consist...</p>
                <div className={style.label}>
                    Dicas
                </div>
            </div>

            <div className={style.card}>
                <div className={style.info}>
                    <ProfileIcon />
                    <h2 className={style.name}>Nome do autor</h2>
                    <p className={style.date}>3 abril, 2014</p>
                </div>
                <h1 className={style.title}>Você sabe como ler 500 livros por ano? descubra que é muito simples</h1>
                <p className={style.paragraph}>Ler 500 livros em um ano é possível com planejamento e disciplina. Divida o número de livros pelos dias do ano, resultando em cerca de 1,37 livros por dia. Use técnicas como leitura dinâmica e audiolivros para otimizar o tempo. Estabeleça metas diárias e mantenha a consist...</p>
                <div className={style.label}>
                    Dicas
                </div>
            </div>

            <div className={style.card}>
                <div className={style.info}>
                    <ProfileIcon />
                    <h2 className={style.name}>Nome do autor</h2>
                    <p className={style.date}>3 abril, 2014</p>
                </div>
                <h1 className={style.title}>Você sabe como ler 500 livros por ano? descubra que é muito simples</h1>
                <p className={style.paragraph}>Ler 500 livros em um ano é possível com planejamento e disciplina. Divida o número de livros pelos dias do ano, resultando em cerca de 1,37 livros por dia. Use técnicas como leitura dinâmica e audiolivros para otimizar o tempo. Estabeleça metas diárias e mantenha a consist...</p>
                <div className={style.label}>
                    Dicas
                </div>
            </div>
            <div className={style.divButton}>
                <Button text="Ir para blogs" variant="blue" textColor="--base-white" />
            </div>
        </Container>
    )
}