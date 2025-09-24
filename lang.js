(function(){const e=document.getElementById("languageSelect"),t="0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A",n={en:{"about-title":"About ALTARYX","about-text":`ALTARYX is a technological digital asset for the new generation of DeFi users.<br>
Benefits: Instant transactions, Low fees, Deflationary model (burn), Transparency, Decentralization,
Control, Ecosystem flexibility, and Growth readiness.<br><br>
<strong>Base parameters:</strong><br>
Network: Arbitrum One<br>
Symbol: ALTX<br>
Decimals: 16<br>
Burn support: Yes<br>
Max supply: 1,000,000,000 ALTX<br>
Contract: <span class="contract">${t}</span>`},ru:{"about-title":"О ALTARYX","about-text":`ALTARYX — технологичный цифровой актив для нового поколения пользователей DeFi.<br>
Преимущества: мгновенные транзакции, низкие комиссии, дефляционная модель (сжигание), прозрачность,
децентрализация, контроль, гибкая экосистема и готовность к росту.<br><br>
<strong>Базовые параметры:</strong><br>
Сеть: Arbitrum One<br>
Символ: ALTX<br>
Десятичных знаков: 16<br>
Поддержка сжигания: Да<br>
Максимальная эмиссия: 1,000,000,000 ALTX<br>
Контракт: <span class="contract">${t}</span>`},de:{"about-title":"Über ALTARYX","about-text":`ALTARYX ist ein technologischer digitaler Vermögenswert für die neue Generation von DeFi-Nutzern.<br>
Vorteile: sofortige Transaktionen, niedrige Gebühren, deflationäres Modell (Burn), Transparenz, Dezentralisierung,
Kontrolle, Flexibilität des Ökosystems und Bereitschaft für Wachstum.<br><br>
<strong>Grundparameter:</strong><br>
Netzwerk: Arbitrum One<br>
Symbol: ALTX<br>
Dezimalstellen: 16<br>
Burn-Unterstützung: Ja<br>
Maximales Angebot: 1.000.000.000 ALTX<br>
Vertrag: <span class="contract">${t}</span>`},es:{"about-title":"Acerca de ALTARYX","about-text":`ALTARYX es un activo digital tecnológico creado para la nueva generación de usuarios de DeFi.<br>
Ventajas: transacciones instantáneas, comisiones bajas, modelo deflacionario (quema), transparencia, descentralización,
control, flexibilidad del ecosistema y preparación para el crecimiento.<br><br>
<strong>Parámetros base:</strong><br>
Red: Arbitrum One<br>
Símbolo: ALTX<br>
Decimales: 16<br>
Compatibilidad con quema: Sí<br>
Suministro máximo: 1.000.000.000 ALTX<br>
Contrato: <span class="contract">${t}</span>`},fr:{"about-title":"À propos d’ALTARYX","about-text":`ALTARYX est un actif numérique technologique conçu pour la nouvelle génération d’utilisateurs DeFi.<br>
Avantages : transactions instantanées, faibles frais, modèle déflationniste (burn), transparence, décentralisation,
contrôle, flexibilité de l’écosystème et préparation à la croissance.<br><br>
<strong>Paramètres de base :</strong><br>
Réseau : Arbitrum One<br>
Symbole : ALTX<br>
Décimales : 16<br>
Prise en charge du burn : Oui<br>
Offre maximale : 1 000 000 000 ALTX<br>
Contrat : <span class="contract">${t}</span>`},ja:{"about-title":"ALTARYXについて","about-text":`ALTARYX は、次世代の DeFi ユーザーのために設計された技術的なデジタル資産です。<br>
特長：即時トランザクション、低手数料、デフレモデル（バーン）、透明性、分散化、コントロール、
エコシステムの柔軟性、そして成長への備え。<br><br>
<strong>基本パラメータ:</strong><br>
ネットワーク: Arbitrum One<br>
シンボル: ALTX<br>
小数点: 16<br>
バーン対応: あり<br>
最大供給量: 1,000,000,000 ALTX<br>
コントラクト: <span class="contract">${t}</span>`},zh:{"about-title":"关于 ALTARYX","about-text":`ALTARYX 是为新一代 DeFi 用户打造的技术型数字资产。<br>
优势：即时交易、低费用、通缩模型（销毁）、透明、去中心化、可控、生态灵活，并具备增长潜力。<br><br>
<strong>基础参数：</strong><br>
网络：Arbitrum One<br>
符号：ALTX<br>
小数位：16<br>
支持销毁：是<br>
最大供应量：1,000,000,000 ALTX<br>
合约：<span class="contract">${t}</span>`}};function a(t){document.querySelectorAll("[data-lang]").forEach((e=>{const a=e.getAttribute("data-lang");n[t]&&n[t][a]&&(e.innerHTML=n[t][a])})),window.scrollTo({top:0,behavior:"instant"})}document.addEventListener("DOMContentLoaded",(()=>a(e.value||"en"))),e.addEventListener("change",(e=>a(e.target.value)))})();