import type { Language } from "./content";

export const editorial: Record<Language, { overview: string[]; rateNote: string; settlement: string; dedup: string; values: string }> = {
  zh: {
    overview: ["DramaCPS 是短剧 CPS 推广合作平台，支持 App 类和网页类 Offer。推广者从自己账号的素材库获取素材与专属跟踪链接，用于 TikTok、YouTube Shorts、Facebook Reels、Instagram Reels、自有网站或 Offer 允许的付费广告。", "用户通过你的专属链接成功归因后，符合条件并经广告主确认的购买、充值或订阅可以产生佣金。App Offer 通常涉及安装和 App 内购买；SagaBox 等网页型 Offer 不要求先下载 App。仅点击、注册或安装通常不产生 CPS 佣金。"],
    rateNote: "佣金比例以账号内当前 Offer 为准。本页平台比例是标注日期的历史参考，不代表实时费率，也不是所有 Offer 的统一分成。",
    settlement: "USDT 并非所有 Publisher 的默认付款方式，需单独确认。广告主向 DramaCPS 结算的日期，不等于 DramaCPS 向推广者付款或银行到账日期；不要把 SagaBox 等平台的上游结算安排当成推广者的固定到账承诺。账号、Offer 或书面特别安排优先。",
    dedup: "按 transaction_id 识别订单并幂等处理重复通知，不要按 click_id 去重：同一次点击可能有多笔有效订单。同一订单的退款、取消或状态变化应更新原订单，不可当作重复消息直接丢弃，也不可再次记为收入。",
    values: "amount 是用户支付金额，payout 是推广者佣金，两者不能混用；与 currency、status 一起核对。示例 URL 中的 YOUR_CLICK_ID 必须替换为真实点击值或追踪系统支持的宏，不要把占位符直接用于正式投放。",
  },
  en: {
    overview: ["DramaCPS is a CPS affiliate platform for short dramas, with both app and web Offers. Get approved creatives and your own attributed links from your account's material library for TikTok, Shorts, Reels, websites and paid channels permitted by the Offer.", "Eligible advertiser-confirmed purchases, top-ups or subscriptions can earn commission after successful attribution through your link. App Offers usually involve installation and in-app payment; web Offers such as SagaBox do not require an app download first. Clicks, registrations and installs alone normally do not earn CPS commission."],
    rateNote: "Your account's current Offer controls the rate. The dated platform-rate list is a historical reference, not a live rate or a universal commission promise.",
    settlement: "USDT is not a default payment method for every Publisher and requires separate confirmation. An advertiser's settlement date with DramaCPS is not the Publisher's payout or bank-arrival date. Do not treat SagaBox or another platform's upstream schedule as a guaranteed Publisher payment date; the account, Offer and confirmed written arrangement control.",
    dedup: "Identify orders by transaction_id and handle repeated notifications idempotently, not by click_id: one click can produce several valid orders. Apply a refund, cancellation or status change to the existing order; do not discard it as a duplicate or book revenue again.",
    values: "amount is the user's payment; payout is the Publisher's commission. Check them with currency and status. Replace YOUR_CLICK_ID in example URLs with the real click value or a macro supported by your tracker before promotion.",
  },
  pt: {
    overview: ["DramaCPS é uma plataforma de afiliados CPS para minidramas, com ofertas de app e web. Obtenha materiais aprovados e links próprios atribuídos na biblioteca da sua conta para TikTok, Shorts, Reels, sites e mídia paga permitida pela oferta.", "Compras, recargas ou assinaturas elegíveis confirmadas pelo anunciante podem gerar comissão após atribuição pelo seu link. Ofertas de app geralmente envolvem instalação e pagamento no app; ofertas web como SagaBox não exigem baixar um app primeiro. Cliques, cadastros e instalações sozinhos normalmente não pagam CPS."],
    rateNote: "Vale a taxa da oferta atual da conta. A lista com data é referência histórica, não taxa em tempo real nem promessa universal.",
    settlement: "USDT não é padrão para todos e exige confirmação individual. A data de liquidação do anunciante com DramaCPS não é a data de pagamento ao Publisher ou de crédito bancário. O calendário da SagaBox ou de outra plataforma não garante a data do seu recebimento; prevalecem conta, oferta e acordo escrito confirmado.",
    dedup: "Identifique pedidos por transaction_id e processe notificações repetidas de forma idempotente, não por click_id: um clique pode gerar várias compras válidas. Reembolso, cancelamento ou mudança de status atualiza o pedido original; não descarte como duplicata nem registre receita novamente.",
    values: "amount é o pagamento do usuário; payout é a comissão do Publisher. Confira currency e status. Substitua YOUR_CLICK_ID pelo valor real ou por uma macro suportada pelo rastreador antes de promover.",
  },
  es: {
    overview: ["DramaCPS es una plataforma de afiliación CPS de minidramas con ofertas de app y web. Obtén materiales aprobados y enlaces propios atribuidos desde la biblioteca de tu cuenta para TikTok, Shorts, Reels, sitios y publicidad permitida por la oferta.", "Las compras, recargas o suscripciones válidas confirmadas por el anunciante pueden generar comisión tras atribución por tu enlace. Las ofertas de app suelen implicar instalación y pago en la app; las ofertas web como SagaBox no requieren descargar una app primero. Clics, registros e instalaciones por sí solos normalmente no pagan CPS."],
    rateNote: "Rige la tasa de la oferta actual de tu cuenta. La lista fechada es una referencia histórica, no una tasa en tiempo real ni una promesa universal.",
    settlement: "USDT no es el método estándar para todos y requiere confirmación individual. La fecha de liquidación del anunciante con DramaCPS no es la de pago al Publisher ni de llegada al banco. El calendario de SagaBox u otra plataforma no garantiza tu fecha de cobro; rigen cuenta, oferta y acuerdo escrito confirmado.",
    dedup: "Identifica pedidos por transaction_id y procesa avisos repetidos de forma idempotente, no por click_id: un clic puede generar varias compras válidas. Reembolso, cancelación o cambio de estado actualiza el pedido original; no lo descartes como duplicado ni registres ingresos otra vez.",
    values: "amount es el pago del usuario; payout es la comisión del Publisher. Revisa currency y status. Sustituye YOUR_CLICK_ID por el valor real o una macro compatible con tu rastreador antes de promocionar.",
  },
};
