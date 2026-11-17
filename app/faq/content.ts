import type { Language } from "../content";
import zh from "./zh.json";
import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

export type FaqQuestion = { id: number; question: string; answer: string };
export type FaqGroup = { title: string; questions: FaqQuestion[] };
export const faqLabels = {
  zh: { entry: "80 条常见问题", title: "DramaCPS 常见问题与解答", intro: "从注册、推广链接到重复购买、素材授权与佣金提现，完整解答推广者的 80 个常见问题。", date: "更新于 2026 年 10 月 20 日", home: "基础教程", categories: "问题分类", questions: "条完整问答", languages: "种语言", notes: "重要说明", all: "全部问题", browse: "按分类阅读", source: "FAQ · 80 问", top: "返回顶部", updated: "最新业务规则与完整问答", copy: "复制本题链接", copied: "已复制", failed: "请复制地址栏链接" },
  en: { entry: "80 FAQs", title: "DramaCPS Questions & Answers", intro: "80 complete answers for Publishers: registration, promotion links, repeat purchases, creative rights, commission and withdrawals.", date: "Updated October 20, 2026", home: "Main guide", categories: "Categories", questions: "complete answers", languages: "languages", notes: "Important information", all: "All questions", browse: "Browse by category", source: "FAQ · 80 answers", top: "Back to top", updated: "Latest business rules and complete answers", copy: "Copy question link", copied: "Copied", failed: "Copy the address bar link" },
  pt: { entry: "80 perguntas frequentes", title: "DramaCPS: perguntas e respostas", intro: "80 respostas completas para Publishers: cadastro, links, compras repetidas, autorização de materiais, comissões e saques.", date: "Atualizado em 20 de outubro de 2026", home: "Guia principal", categories: "Categorias", questions: "respostas completas", languages: "idiomas", notes: "Informações importantes", all: "Todas as perguntas", browse: "Leia por categoria", source: "FAQ · 80 respostas", top: "Voltar ao topo", updated: "Regras comerciais atuais e respostas completas", copy: "Copiar link da pergunta", copied: "Copiado", failed: "Copie o link da barra de endereço" },
  es: { entry: "80 preguntas frecuentes", title: "DramaCPS: preguntas y respuestas", intro: "80 respuestas completas para Publishers: registro, enlaces, compras repetidas, autorización de materiales, comisiones y retiros.", date: "Actualizado el 20 de octubre de 2026", home: "Guía principal", categories: "Categorías", questions: "respuestas completas", languages: "idiomas", notes: "Información importante", all: "Todas las preguntas", browse: "Lee por categoría", source: "FAQ · 80 respuestas", top: "Volver arriba", updated: "Reglas comerciales actuales y respuestas completas", copy: "Copiar enlace de la pregunta", copied: "Copiado", failed: "Copia el enlace de la barra de direcciones" },
};

const categoryTitles = {
  en: ["Platform and registration", "Platforms and commission rates", "Promotion links and usage", "Attribution and repeat purchases", "Channels and traffic requirements", "Drama footage and content creation", "Reporting, APIs and tracking", "Settlement and withdrawals", "Account safety, issues and support"],
  pt: ["Plataforma e cadastro", "Plataformas e taxas de comissão", "Links e formas de uso", "Atribuição e compras repetidas", "Canais e requisitos de tráfego", "Materiais e criação de conteúdo", "Dados, APIs e rastreamento", "Liquidação e saques", "Segurança, problemas e suporte"],
  es: ["Plataforma y registro", "Plataformas y tasas de comisión", "Enlaces y uso", "Atribución y compras repetidas", "Canales y requisitos de tráfico", "Materiales y creación de contenido", "Datos, APIs y seguimiento", "Liquidación y retiros", "Seguridad, problemas y soporte"],
};
const translatedNotes = {
  en: "DramaCPS supports genuine, compliant promotion traffic worldwide. Bot traffic and incentivized traffic are prohibited.\n\nDramaBox uses permanent attribution; other drama platforms use 30-day attribution. Every eligible user purchase within the valid attribution period can earn promotion commission.\n\nRe-editing is permitted, including cutting, translation, subtitles, voice-over and combining clips, but only with free-episode footage permitted for promotion. Unauthorized use of paid-episode content is prohibited.\n\nCustom tracking parameters such as `sub_id` and `click_id` are currently supported only by YourChannel, ShorPeak and SagaBox.\n\nCommission amounts, order validity, payment status and final settlement are governed by advertiser-confirmed data and the applicable formal partnership rules.",
  pt: "A DramaCPS aceita tráfego promocional real e conforme no mundo todo. Bots e tráfego incentivado são proibidos.\n\nDramaBox usa atribuição permanente; outras plataformas usam 30 dias. Cada compra elegível dentro da atribuição válida pode gerar comissão.\n\nÉ permitida a criação de novas versões com cortes, tradução, legendas, voz e combinação de trechos, mas apenas com materiais de episódios gratuitos permitidos para promoção. O uso não autorizado de conteúdo pago é proibido.\n\nParâmetros personalizados como `sub_id` e `click_id` atualmente são aceitos somente por YourChannel, ShorPeak e SagaBox.\n\nValores de comissão, validade dos pedidos, status do pagamento e liquidação final seguem os dados confirmados pelo anunciante e as regras formais de parceria aplicáveis.",
  es: "DramaCPS acepta tráfico promocional real y conforme en todo el mundo. Se prohíben bots y tráfico incentivado.\n\nDramaBox utiliza atribución permanente; otras plataformas utilizan 30 días. Cada compra elegible durante la atribución válida puede generar comisión.\n\nSe permite reeditar, cortar, traducir, subtitular, añadir voz y combinar fragmentos, pero solo con materiales de episodios gratuitos permitidos para promoción. Está prohibido el uso no autorizado de contenido de pago.\n\nActualmente, solo YourChannel, ShorPeak y SagaBox admiten parámetros personalizados como `sub_id` y `click_id`.\n\nLos importes de comisión, validez de pedidos, estado de pago y liquidación final se rigen por datos confirmados por el anunciante y las reglas formales de colaboración aplicables.",
};
const translations = { en, pt, es };
export const faqLocales = Object.fromEntries((["zh", "en", "pt", "es"] as Language[]).map((language) => [language, language === "zh" ? zh : {
  groups: zh.groups.map((group, index) => ({ title: categoryTitles[language][index], questions: group.questions.map(({ id }) => {
    const entry = translations[language][id - 1];
    return { id, question: entry[0], answer: entry[1] };
  }) })),
  notes: translatedNotes[language],
}])) as Record<Language, { groups: FaqGroup[]; notes: string }>;

export function faqSearchDocuments(language: Language) {
  const content = faqLocales[language];
  return [...content.groups.flatMap((group) => group.questions.map((item) => ({
    title: `Q${item.id} · ${item.question}`, text: `${group.title} ${item.answer.replace(/\*\*|`/g, "")}`, href: `/faq?lang=${language}#q${item.id}`, source: faqLabels[language].source,
  }))), { title: faqLabels[language].notes, text: content.notes.replace(/\*\*|`/g, ""), href: `/faq?lang=${language}#important`, source: faqLabels[language].source }];
}
