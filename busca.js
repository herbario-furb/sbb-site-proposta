// Busca da proposta de site da SBB (mesma lógica do site do FlorestaSC).
// Por enquanto os resultados apontam para as páginas atuais do botanica.org.br.
var B = 'https://www.botanica.org.br';
window.INDICE = [
  {t: 'A Sociedade', s: 'A SBB · História, finalidades e quem somos', u: B + '/a-sociedade/', x: 'sobre historia fundacao 1950 associacao cientifica cultural educacional finalidade'},
  {t: 'Diretoria Nacional atual', s: 'A SBB · Presidência, secretarias e tesouraria', u: B + '/diretoria-nacional-atual/', x: 'diretoria presidente vice secretario tesoureiro gestao'},
  {t: 'Diretorias Nacionais anteriores', s: 'A SBB · Gestões passadas', u: B + '/diretorias-nacionais-anteriores/', x: 'diretoria anteriores historico presidentes gestoes'},
  {t: 'Conselho Superior', s: 'A SBB · Membros e atribuições', u: B + '/conselho-superior/', x: 'conselho superior conselheiros'},
  {t: 'Estatuto da SBB', s: 'A SBB · Documento vigente', u: B + '/estatuto-da-sociedade-botanica-do-brasil/', x: 'estatuto regras normas documento'},
  {t: 'Regimento da SBB', s: 'A SBB · Documento vigente', u: B + '/regimento-da-sociedade-botanica-do-brasil/', x: 'regimento interno regras normas documento'},
  {t: 'Núcleos, comissões e representações', s: 'A SBB · Grupos de trabalho', u: B + '/comissoes-nucleos-representacoes-e-rede-brasileira-de-herbarios/', x: 'nucleos comissoes representacoes grupos'},
  {t: 'Portarias', s: 'A SBB · Atos da Diretoria', u: B + '/portarias/', x: 'portaria atos normas'},
  {t: 'Eleições', s: 'A SBB · Editais e resultados', u: B + '/eleicoes/', x: 'eleicao edital chapa votacao conselho regional diretoria'},
  {t: 'Transparência', s: 'A SBB · Contas e relatórios', u: B + '/transparencia/', x: 'transparencia contas financeiro balanco relatorio prestacao'},
  {t: 'Assembleia Ordinária', s: 'A SBB · Atas e convocações', u: B + '/assembleia/assembleia-ordinaria/', x: 'assembleia ordinaria ata convocacao'},
  {t: 'Assembleia Extraordinária', s: 'A SBB · Atas e convocações', u: B + '/assembleia/assembleia-extraordinaria/', x: 'assembleia extraordinaria ata convocacao'},
  {t: 'Arquivo histórico (Tainacan)', s: 'A SBB · Acervo digital', u: 'https://tainacan.botanica.org.br/', x: 'arquivo acervo historico memoria documentos fotos'},
  {t: 'Anuidades', s: 'Associe-se · Valores e pagamento', u: B + '/anuidades/', x: 'anuidade pagamento valor associado socio boleto'},
  {t: 'Área do associado', s: 'Associe-se · Login no sistema Assocializa', u: 'https://assocializa.com.br/sbb', x: 'login entrar associado cadastro senha assocializa'},
  {t: 'Congressos Nacionais de Botânica', s: 'Eventos · Edições, locais e plantas-símbolo', u: B + '/congressos-nacionais-de-botanica/', x: 'congresso nacional botanica cnbot edicoes planta simbolo historico'},
  {t: 'Anais e resumos dos congressos', s: 'Eventos · Acesso restrito a associados', u: B + '/acesso-restrito/', x: 'anais resumos trabalhos congresso'},
  {t: 'Comissões organizadoras dos congressos', s: 'Eventos', u: B + '/comissoes-organizadoras-de-reunioes-e-congressos-nacionais-de-botanica/', x: 'comissao organizadora congresso reunioes'},
  {t: 'Documentos para comissão organizadora', s: 'Eventos · Modelos e orientações', u: B + '/documentos-para-comissao-organizadora/', x: 'documentos comissao organizadora modelos orientacoes'},
  {t: 'Eventos regionais 2026', s: 'Eventos · Agenda das regionais', u: B + '/noticias/agenda-de-eventos-da-sbb-para-o-ano-de-2026/', x: 'eventos regionais agenda 2026 reuniao encontro jornada'},
  {t: 'Regional Norte', s: 'Diretorias Regionais', u: B + '/diretorias-regionais/norte/', x: 'regional norte amazonia'},
  {t: 'Regional Nordeste', s: 'Diretorias Regionais', u: B + '/diretorias-regionais/nordeste/', x: 'regional nordeste'},
  {t: 'Regional Centro-Oeste', s: 'Diretorias Regionais', u: B + '/diretorias-regionais/centro-oeste/', x: 'regional centro oeste'},
  {t: 'Regional Minas Gerais, Bahia e Espírito Santo', s: 'Diretorias Regionais', u: B + '/diretorias-regionais/minas-gerais-bahia-espirito-santo/', x: 'regional minas gerais bahia espirito santo mg ba es'},
  {t: 'Regional Rio de Janeiro – São Paulo', s: 'Diretorias Regionais', u: B + '/diretorias-regionais/rio-de-janeiro-sao-paulo/', x: 'regional rio de janeiro sao paulo rj sp jornada'},
  {t: 'Regional Sul – PR, SC e RS', s: 'Diretorias Regionais', u: B + '/diretorias-regionais/sul-pr-sc-e-rs/', x: 'regional sul parana santa catarina rio grande do sul'},
  {t: 'Acta Botanica Brasilica', s: 'Publicações · Revista científica da SBB', u: 'http://acta.botanica.org.br/', x: 'acta revista periodico artigos publicar submissao'},
  {t: 'A Rede Brasileira de Herbários', s: 'RBH', u: B + '/a-rede-brasileira-de-herbarios/', x: 'rbh rede herbarios colecoes'},
  {t: 'Catálogo da Rede Brasileira de Herbários', s: 'RBH · Herbários do país', u: B + '/catalogo-da-rede-brasileira-de-herbarios/', x: 'catalogo herbarios lista sigla index herbariorum'},
  {t: 'Cadastrar herbário', s: 'RBH · Formulário', u: B + '/cadastrar-herbario/', x: 'cadastrar herbario cadastro formulario'},
  {t: 'Usos e importância dos herbários', s: 'RBH', u: B + '/usos-e-importancia-dos-herbarios/', x: 'herbario importancia usos'},
  {t: 'Guia de boas práticas', s: 'RBH · Curadoria de coleções', u: B + '/guia-de-boas-praticas/', x: 'guia boas praticas curadoria herbario'},
  {t: 'Manuais e vídeos', s: 'RBH', u: B + '/rbh/manuais-e-videos/', x: 'manuais videos tutoriais herbario'},
  {t: 'Publicações da RBH', s: 'RBH', u: B + '/rbh/publicacoes-rbh/', x: 'publicacoes rbh livros'},
  {t: 'Prêmio Scientia Amabilis', s: 'Prêmios', u: B + '/noticias/inscricoes-para-o-premio-scientia-amabilis-2025/', x: 'premio scientia amabilis'},
  {t: 'Prêmio Verde', s: 'Prêmios', u: B + '/premio-verde/', x: 'premio verde'},
  {t: 'Prêmio Roberto Burle Marx (PRBM)', s: 'Prêmios', u: B + '/noticias/premio-roberto-burle-marx-prbm/', x: 'premio roberto burle marx prbm'},
  {t: 'Medalha de Mérito em Botânica Graziela Maciel Barroso', s: 'Prêmios', u: B + '/medalha-de-merito-em-botanica-graziela-maciel-barroso/', x: 'medalha merito graziela maciel barroso'},
  {t: 'Homenagens', s: 'Prêmios', u: B + '/homenagens/', x: 'homenagens homenageados'},
  {t: 'Notícias', s: 'Todas as notícias e editais', u: B + '/noticias/', x: 'noticias novidades editais'},
  {t: 'Eleições do Conselho Superior – 2026', s: 'Notícia · 18 nov 2026', u: B + '/noticias/', x: 'eleicao conselho superior 2026'},
  {t: 'Eleição das Regionais Norte e Nordeste – 2027–2028', s: 'Edital · 18 nov 2026', u: B + '/noticias/', x: 'edital eleicao regional norte nordeste 2027 2028 portaria 005'},
  {t: 'V Jornada Rio – São Paulo de Botânica – 2027', s: 'Notícia · 17 nov 2026', u: B + '/noticias/', x: 'jornada rio sao paulo 2027 evento'},
  {t: 'Gravuras de Roberto Burle Marx', s: 'Notícia · 3 nov 2026', u: B + '/noticias/', x: 'gravuras burle marx aquisicao socios'},
  {t: 'Contato', s: 'Secretaria · Brasília/DF', u: 'mailto:contato@botanica.org.br', x: 'contato email telefone endereco secretaria brasilia atendimento'},
  {t: 'Novo mapa do site (proposta)', s: 'Proposta · Como o menu ficaria', u: 'mapa-do-site.html', x: 'mapa site menu proposta'}
];

(function () {
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  document.querySelectorAll('[data-busca]').forEach(function (inp) {
    var out = document.getElementById(inp.getAttribute('data-busca'));
    inp.addEventListener('input', function () {
      var q = norm(inp.value.trim()); out.innerHTML = '';
      if (q.length < 2) return;
      var termos = q.split(/\s+/), res = [];
      window.INDICE.forEach(function (it) {
        var t = norm(it.t), x = norm(it.s + ' ' + it.x), s = 0;
        for (var i = 0; i < termos.length; i++) {
          if (t.indexOf(termos[i]) >= 0) s += 5; else if (x.indexOf(termos[i]) >= 0) s += 1; else { s = 0; break; }
        }
        if (s > 0) res.push([s, it]);
      });
      res.sort(function (a, b) { return b[0] - a[0]; });
      res.slice(0, 8).forEach(function (r) {
        var it = r[1], a = document.createElement('a');
        a.href = it.u;
        if (/^https?:/.test(it.u)) { a.target = '_blank'; a.rel = 'noopener'; }
        a.textContent = it.t;
        var sm = document.createElement('small'); sm.textContent = it.s; a.appendChild(sm);
        out.appendChild(a);
      });
      if (!res.length) { var p = document.createElement('p'); p.style.cssText = 'margin:4px 0;color:#5C6B62;font-size:14px'; p.textContent = 'Nada encontrado. Tente outra palavra.'; out.appendChild(p); }
    });
  });
})();
