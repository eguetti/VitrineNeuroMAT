{
	"translatorID": "9196b616-adc4-4a9b-9942-23ec0712683a",
	"label": "NeuroMat to Wikidata",
	"creator": "Éder Porto Ferreira Alves",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"lastUpdated": "2021-04-28 06:49:16"
}

/*
	This code is an adaptation of the zotkat Wikidata to QuickStatements translator,
	available at https://github.com/UB-Mannheim/zotkat/blob/master/Wikidata%20QuickStatements.js
	This, and the original code are under the license GNU Affero General Public License v3.0
*/

// Known authors of articles Neuromat //
var neuromat_authors = {
"Abadi, M": "Q99394124","Abadi, M.": "Q99394124","Abadi, Miguel": "Q99394124",
"Abud, L M ": "Q105708507","Abud, L. M.": "Q105708507","Abud, Luciana de Melo e": "Q105708507",
"Aguiar, L A": "Q99520958","Aguiar, L A A": "Q99520958","Aguiar, L. A.": "Q99520958","Aguiar, L. A. A.": "Q99520958","Aguiar, Leandro A A": "Q99520958","Aguiar, Leandro Álvaro de Alcântara": "Q99520958",
"Albada, S J ": "Q41044102","Albada, S. J.": "Q41044102","Albada, Sacha J van": "Q41044102",
"Albuquerque, V H C ": "Q105708583","Albuquerque, V. H. C.": "Q105708583","Albuquerque, Victor Hugo C de": "Q105708583","Albuquerque, Victor Hugo Costa de": "Q105708583",
"Alfieri, F M": "Q92797758","Alfieri, F. M.": "Q92797758","Alfieri, Fábio Marcon": "Q92797758",
"Almas, J L": "Q105708482","Almas, J. L.": "Q105708482","Almas, Jordania Lindolfo": "Q105708482","Lindolfo-Almas, J": "Q105708482","Lindolfo-Almas, J.": "Q105708482","Lindolfo-Almas, Jordania": "Q105708482",
"Almeida-Filho, D": "Q94521433","Almeida-Filho, D.": "Q94521433","Almeida-Filho, Daniel": "Q94521433",
"Alves, D": "Q105708418","Alves, D F L": "Q105708418","Alves, D.": "Q105708418","Alves, D. F. L.": "Q105708418","Alves, David": "Q105708418","Alves, David Fernando Levon": "Q105708418",
"Amon, M J": "Q98767047","Amon, M. J.": "Q98767047","Amon, Mary Jean": "Q98767047",
"Amorim, M R": "Q105708522","Amorim, M. R.": "Q105708522","Amorim, Mateus R": "Q105708522","Amorim, Mateus Ramos": "Q105708522",
"Amoruso, L": "Q57696927","Amoruso, L.": "Q57696927","Amoruso, Lucia": "Q57696927","Amoruso, Lucía": "Q57696927",
"Andrade, F G ": "Q105708439","Andrade, F. G.": "Q105708439","Andrade, Fernanda Guimarães de": "Q105708439","Guimaraes, F": "Q105708439","Guimaraes, F.": "Q105708439","Guimaraes, Fernanda": "Q105708439",
"Andrade, P": "Q105708541","Andrade, P L D": "Q105708541","Andrade, P.": "Q105708541","Andrade, P. L. D.": "Q105708541","Andrade, Plinio": "Q105708541","Andrade, Plinio L. D.": "Q105708541","Andrade, Plinio Lucas Dias": "Q105708541",
"André, M": "Q98767070","André, M F T": "Q98767070","André, M.": "Q98767070","André, M. F. T.": "Q98767070","André, Morgan": "Q98767070","André, Morgan Florian Thibault": "Q98767070",
"Anghinah, R": "Q105708551","Anghinah, R.": "Q105708551","Anghinah, Renato": "Q105708551",
"Antunes, G": "Q105708444","Antunes, G.": "Q105708444","Antunes, Gabriela": "Q105708444",
"Araújo Júnior, H I": "Q105708460","Araújo Júnior, H. I.": "Q105708460","Araújo-Júnior, H I ": "Q105708460","Araújo-Júnior, H. I.": "Q105708460","Araújo-Júnior, Hermínio Ismael de": "Q105708460","Júnior, H I A": "Q105708460","Júnior, H. I. A.": "Q105708460","Júnior, Hermínio Ismael de Araújo": "Q105708460",
"Araújo, D ": "Q41503538","Araujo, D B ": "Q41503538","Araújo, D B ": "Q41503538","Araújo, D.": "Q41503538","Araujo, D. B.": "Q41503538","Araújo, D. B.": "Q41503538","Araujo, Draulio B de": "Q41503538","Araújo, Draulio Barros de": "Q41503538","Araújo, Dráulio de": "Q41503538",
"Araújo, G V F ": "Q105708453","Araújo, G. V. F.": "Q105708453","Araújo, Giovanna Viana Fontenelle de": "Q105708453",
"Araújo, J F": "Q80688944","Araújo, J. F.": "Q80688944","Araújo, John Fontenele": "Q80688944",
"Arsalani, S": "Q102332069","Arsalani, S.": "Q102332069","Arsalani, Soudabeh": "Q102332069",
"Arsalani, S": "Q105708561","Arsalani, S.": "Q105708561","Arsalani, Saeideh": "Q105708561",
"Azevedo Neto, R M": "Q47921717","Azevedo Neto, R. M.": "Q47921717","Neto, R M A": "Q47921717","Neto, R. M. A.": "Q47921717","Neto, Raymundo Machado de Azevedo": "Q47921717",
"Azzellini,  C": "Q105708429","Azzellini, . C.": "Q105708429","Azzellini, Érica Camillo": "Q105708429",
"Baffa, O": "Q56860684","Baffa, O.": "Q56860684","Baffa, Oswaldo": "Q56860684",
"Baron, J": "Q105708471","Baron, J.": "Q105708471","Baron, Jerome": "Q105708471",
"Batista, A": "Q105708390","Batista, A M": "Q105708390","Batista, A.": "Q105708390","Batista, A. M.": "Q105708390","Batista, Antonio": "Q105708390","Batista, Antonio Marcos": "Q105708390",
"Battistella, L R": "Q42766209","Battistella, L. R.": "Q42766209","Battistella, Linamara R": "Q42766209","Battistella, Linamara Rizzo": "Q42766209",
"Belchior, H": "Q105708462","Belchior, H A": "Q105708462","Belchior, H.": "Q105708462","Belchior, H. A.": "Q105708462","Belchior, Hindiael": "Q105708462","Belchior, Hindiael Aeraf": "Q105708462",
"Benevides, G M L": "Q105708455","Benevides, G. M. L.": "Q105708455","Benevides, Gisele M. L.": "Q105708455","Lourenço-Benevides, G M": "Q105708455","Lourenço-Benevides, G. M.": "Q105708455","Lourenço-Benevides, Gisele Maranghetti": "Q105708455",
"Ben-Hamou, A": "Q105708387","Ben-Hamou, A.": "Q105708387","Ben-Hamou, Anna": "Q105708387","Hamou, A A B": "Q105708387","Hamou, A. A. B.": "Q105708387","Hamou, Anna Alia Ben": "Q105708387",
"Bernardi, D": "Q88519079","Bernardi, D.": "Q88519079","Bernardi, Davide": "Q88519079",
"Bertola, L": "Q57548380","Bertola, L.": "Q57548380","Bertola, Laiss": "Q57548380",
"Billwiller, F": "Q94521432","Billwiller, F.": "Q94521432","Billwiller, Francesca": "Q94521432",
"Bonagamba, L G H": "Q105708495","Bonagamba, L. G. H.": "Q105708495","Bonagamba, Leni G H": "Q105708495","Bonagamba, Leni Gomes Heck": "Q105708495",
"Borges, F": "Q87722842","Borges, F S": "Q87722842","Borges, F.": "Q87722842","Borges, F. S.": "Q87722842","Borges, Fernando": "Q87722842",
"Braghetto, K": "Q59276437","Braghetto, K R": "Q59276437","Braghetto, K.": "Q59276437","Braghetto, K. R.": "Q59276437","Braghetto, Kelly": "Q59276437","Braghetto, Kelly R": "Q59276437","Braghetto, Kelly R.": "Q59276437","Braghetto, Kelly Rosa": "Q59276437",
"Brito, C M": "Q105708410","Brito, C M M ": "Q105708410","Brito, C. M.": "Q105708410","Brito, C. M. M.": "Q105708410","Brito, Christina May Moran de": "Q105708410","Brito, Christina Moran": "Q105708410",
"Brochini, L": "Q98767036","Brochini, L.": "Q98767036","Brochini, Ludmila": "Q98767036","Rodrigues, L B": "Q98767036","Rodrigues, L. B.": "Q98767036","Rodrigues, Ludmila Brochini": "Q98767036",
"Brunoni, A R": "Q37838852","Brunoni, A. R.": "Q37838852","Brunoni, André R": "Q37838852","Brunoni, Andre Russowsky": "Q37838852",
"Cairasco, N G": "Q105708535","Cairasco, N. G.": "Q105708535","Cairasco, Norberto Garcia": "Q105708535","Garcia-Cairasco, N": "Q105708535","Garcia-Cairasco, N.": "Q105708535","Garcia-Cairasco, Norberto": "Q105708535",
"Caixeta, F": "Q81334446","Caixeta, F.": "Q81334446","Caixeta, Fábio": "Q81334446",
"Campos, A A N": "Q105708382","Campos, A. A. N.": "Q105708382","Campos, Anaelli Aparecida Nogueira": "Q105708382","Nogueira-Campos, A A": "Q105708382","Nogueira-Campos, A. A.": "Q105708382","Nogueira-Campos, Anaelli A": "Q105708382","Nogueira-Campos, Anaelli Aparecida": "Q105708382",
"Campos, J G F": "Q98767068","Campos, J. G. F.": "Q98767068","Campos, João Guilherme Ferreira": "Q98767068",
"Cao, R": "Q41854291","Cao, R.": "Q41854291","Cao, Ricardo": "Q41854291",
"Cardoso, G C": "Q105708449","Cardoso, G. C.": "Q105708449","Cardoso, George C.": "Q105708449","Cardoso, George Cunha": "Q105708449",
"Carelli, P V": "Q51977170","Carelli, P. V.": "Q51977170","Carelli, Pedro V": "Q51977170","Carelli, Pedro V.": "Q51977170",
"Carlétti, I M O": "Q105708467","Carlétti, I. M. O.": "Q105708467","Carlétti, Isis Moraes Ornelas": "Q105708467","Ornelas, I": "Q105708467","Ornelas, I.": "Q105708467","Ornelas, Isis": "Q105708467",
"Carneiro, A A O": "Q56860685","Carneiro, A. A. O.": "Q56860685","Carneiro, Antonio Adilton O": "Q56860685",
"Carrera, M": "Q69551602","Carrera, M.": "Q69551602","Carrera, Marília": "Q69551602",
"Carvalho, I C S": "Q105708466","Carvalho, I. C. S.": "Q105708466","Carvalho, Isabel Cristina dos Santos": "Q105708466",
"Carvalho, I S": "Q21341838","Carvalho, I. S.": "Q21341838","Carvalho, Ismar de Souza": "Q21341838",
"Carvalho, T T A": "Q98767063","Carvalho, T T A ": "Q98767063","Carvalho, T. T. A.": "Q98767063","Carvalho, Tawan T. A.": "Q98767063","Carvalho, Tawan Tayron Andrade de": "Q98767063",
"Carvalho, W A F ": "Q105708585","Carvalho, W. A. F.": "Q105708585","Carvalho, Walter A. F. de": "Q105708585","Carvalho, Walter Augusto Fonseca de": "Q105708585",
"Castro, B M": "Q105708398","Castro, B M ": "Q105708398","Castro, B. M.": "Q105708398","Castro, Bruno M.": "Q105708398","Castro, Bruno Monte de": "Q105708398",
"Catunda, J M Y": "Q105708474","Catunda, J. M. Y.": "Q105708474","Catunda, João Marcos Yamasaki": "Q105708474",
"Ceballos, C C": "Q86648545","Ceballos, C. C.": "Q86648545","Ceballos, Cesar C": "Q86648545",
"Cecchi, G A": "Q65055524","Cecchi, G. A.": "Q65055524","Cecchi, Guillermo A": "Q65055524","Cecchi, Guillermo A.": "Q65055524",
"Cerqueira, A": "Q105708385","Cerqueira, A.": "Q105708385","Cerqueira, Andressa": "Q105708385",
"Cesar, J": "Q105708481","César, J E S": "Q105708481","Cesar, J.": "Q105708481","César, J. E. S.": "Q105708481","Cesar, Jonatas": "Q105708481","César, Jônatas Eduardo da Silva": "Q105708481",
"Chaves, M F": "Q103747119","Chaves, M. F.": "Q103747119","Chaves, Monica Frias": "Q103747119",
"Chaves, M F": "Q105708530","Chaves, M F F": "Q105708530","Chaves, M. F.": "Q105708530","Chaves, M. F. F.": "Q105708530","Chaves, Monica de Freitas Frias": "Q105708530","Chaves, Monica F": "Q105708530",
"Checchinato, C M P": "Q105708406","Checchinato, C. M. P.": "Q105708406","Checchinato, Catia Mendes Pereira": "Q105708406","Pereira, C M": "Q105708406","Pereira, C. M.": "Q105708406","Pereira, Catia M": "Q105708406",
"Cini, F A": "Q105708437","Cini, F. A.": "Q105708437","Cini, Felipe Augusto": "Q105708437","Silva, F A C ": "Q105708437","Silva, F. A. C.": "Q105708437","Silva, Felipe Augusto Cini da": "Q105708437",
"Coimbra, B": "Q60895772","Coimbra, B.": "Q60895772","Coimbra, Bárbara": "Q60895772",
"Coletti, C F": "Q105708413","Coletti, C. F.": "Q105708413","Coletti, Cristian F.": "Q105708413","Coletti, Cristian Favio": "Q105708413",
"Collares Neto, M L R": "Q105708525","Collares Neto, M. L. R.": "Q105708525","Collares, M": "Q105708525","Collares, M.": "Q105708525","Neto, M L R C": "Q105708525","Neto, M. L. R. C.": "Q105708525","Neto, Maurício de Lemos Rodrigues Collares": "Q105708525",
"Collet, P": "Q3525862","Collet, P.": "Q3525862","Collet, Pierre": "Q3525862",
"Conceição, T B R": "Q105708572","Conceição, T. B. R.": "Q105708572","Conceição, Thamiris Botelho Ribeiro": "Q105708572",
"Conforto, A B": "Q105708371","Conforto, A. B.": "Q105708371","Conforto, Adriana Bastos": "Q105708371",
"Copelli, M": "Q56046271","Copelli, M.": "Q56046271","Copelli, Mauro": "Q56046271",
"Cordeiro, V L": "Q91057927","Cordeiro, V. L.": "Q91057927","Cordeiro, Vinicius Lima": "Q91057927",
"Cordeiro, V L": "Q98767055","Cordeiro, V. L.": "Q98767055","Cordeiro, Vinícius L.": "Q98767055","Cordeiro, Vinicius Lima": "Q98767055",
"Coregliano, L N": "Q105708498","Coregliano, L. N.": "Q105708498","Coregliano, Leonardo Nagami": "Q105708498",
"Corrêa, J F G": "Q105708484","Corrêa, J. F. G.": "Q105708484","Corrêa, José F Guedes": "Q105708484","Corrêa, Jose Fernando Guedes": "Q105708484",
"Costa Filho, C.": "Q105708408","Costa Filho, C. F.": "Q105708408","Filho, C C": "Q105708408","Filho, C F C": "Q105708408","Filho, Célio Costa": "Q105708408","Filho, Célio Figueira da Costa": "Q105708408",
"Costa, A A": "Q87719470","Costa, A. A.": "Q87719470","Costa, Ariadne A.": "Q87719470","Costa, Ariadne de Andrade": "Q87719470",
"Cota, V R": "Q105708584","Cota, V. R.": "Q105708584","Cota, Vinicius R": "Q105708584","Cota, Vinicius Rosa": "Q105708584",
"Coutinho Filho, M. D.": "Q105708527","Coutinho-Filho, M D": "Q105708527","Coutinho-Filho, M. D.": "Q105708527","Coutinho-Filho, Maurício D": "Q105708527","Filho, M D C": "Q105708527","Filho, Maurício Domingues Coutinho": "Q105708527",
"Craiem, D": "Q79157378","Craiem, D.": "Q79157378","Craiem, Damian": "Q79157378",
"Cunha, A J L A ": "Q105708389","Cunha, A. J. L. A.": "Q105708389","Cunha, Antonio José Ledo Alves da": "Q105708389","Cunha, Antônio José Ledo Alves da": "Q105708389",
"Cunha, A O S": "Q88739291","Cunha, A. O. S.": "Q88739291","Cunha, Alexandra Olimpio Siqueira": "Q88739291",
"D. Neto, A": "Q105708373","D. Neto, A.": "Q105708373","Dória Neto, A D": "Q105708373","Dória Neto, A. D.": "Q105708373","Neto, A D": "Q105708373","Neto, A D D": "Q105708373","Neto, A. D.": "Q105708373","Neto, A. D. D.": "Q105708373","Neto, Adrião D": "Q105708373","Neto, Adrião Duarte Dória": "Q105708373",
"d’Alencar, M": "Q105708523","d’Alencar, M.": "Q105708523","d’Alencar, Matheus": "Q105708523","d'Alencar, M S": "Q105708523","d'Alencar, M. S.": "Q105708523","d'Alencar, Matheus Silva": "Q105708523",
"D'Avila, J": "Q105708486","D'Avila, J.": "Q105708486","D'Avila, Juliana": "Q105708486","Souza, J A ": "Q105708486","Souza, J. A.": "Q105708486","Souza, Juliana Avila de": "Q105708486",
"De Masi, A": "Q98767043","De Masi, A.": "Q98767043","DeMasi, A": "Q98767043","DeMasi, A.": "Q98767043","DeMasi, Anna": "Q98767043",
"Dellajustina, F J": "Q105708440","Dellajustina, F. J.": "Q105708440","Dellajustina, Fernanda Jaiara": "Q105708440",
"Dellamonica Junior, D D": "Q102431636","Dellamonica Junior, D. D.": "Q102431636","Dellamonica, D": "Q102431636","Dellamonica, D.": "Q102431636","Dellamonica, Domingos": "Q102431636","Junior, D D": "Q102431636","Junior, D. D.": "Q102431636","Junior, Domingos Dellamonica": "Q102431636",
"Deslandes, A": "Q42808127","Deslandes, A.": "Q42808127","Deslandes, Andrea": "Q42808127",
"Deus, J L ": "Q105708488","Deus, J. L.": "Q105708488","Deus, Júnia Lara de": "Q105708488",
"Dias, R": "Q105708560","Dias, R.": "Q105708560","Dias, Ronaldo": "Q105708560",
"Dieb, D A A": "Q105708414","Dieb, D. A. A.": "Q105708414","Dieb, Daniel Almeida Abrahão": "Q105708414",
"Diello, M": "Q105708518","Diello, M.": "Q105708518","Diello, Mariana": "Q105708518","Silva, M D S ": "Q105708518","Silva, M. D. S.": "Q105708518","Silva, Mariana Diello Soares da": "Q105708518",
"Diesmann, M": "Q41045612","Diesmann, M.": "Q41045612","Diesmann, Markus": "Q41045612",
"Diniz, B S": "Q38800234","Diniz, B. S.": "Q38800234","Diniz, Breno Satler": "Q38800234",
"Ditlevsen, S": "Q46985324","Ditlevsen, S.": "Q46985324","Ditlevsen, Susanne": "Q46985324",
"Duarte, A": "Q105708375","Duarte, A.": "Q105708375","Duarte, Aline": "Q105708375","Oliveira, A D ": "Q105708375","Oliveira, A. D.": "Q105708375","Oliveira, Aline Duarte de": "Q105708375",
"Duarte, A": "Q98767033","Duarte, A.": "Q98767033","Duarte, Aline": "Q98767033",
"Eleuterio, R G": "Q105708546","Eleutério, R G": "Q105708546","Eleuterio, R. G.": "Q105708546","Eleutério, R. G.": "Q105708546","Eleuterio, Rachel G.": "Q105708546","Eleutério, Rachel Gomes": "Q105708546",
"Erthal, F": "Q105708436","Erthal, F C S": "Q105708436","Erthal, F S": "Q105708436","Erthal, F.": "Q105708436","Erthal, F. C. S.": "Q105708436","Erthal, F. S.": "Q105708436","Erthal, Fatima Cristina Smith": "Q105708436","Erthal, Fátima Smith": "Q105708436",
"Faria, F H C": "Q105708434","Faria, F. H. C.": "Q105708434","Faria, Fabio Henrique Cortes": "Q105708434","Faria, Fábio Henrique Cortes": "Q105708434",
"Farias, K S": "Q94521429","Farias, K. S.": "Q94521429","Farias, Kelly Soares": "Q94521429",
"Favela, L H": "Q48729368","Favela, L. H.": "Q48729368","Favela, Luis H.": "Q48729368",
"Feilding, A": "Q4947737","Feilding, A.": "Q4947737","Feilding, Amanda": "Q4947737",
"Fernandes, V R": "Q105708581","Fernandes, V. R.": "Q105708581","Fernandes, Valter da Rocha": "Q105708581","Fernandes, Valter R": "Q105708581",
"Fernandez, M": "Q105708519","Fernández, M": "Q105708519","Fernandez, M.": "Q105708519","Fernández, M.": "Q105708519","Fernandez, Mariela": "Q105708519","Fernández, Mariela": "Q105708519",
"Ferrari, P": "Q25136955","Ferrari, P A": "Q25136955","Ferrari, P.": "Q25136955","Ferrari, P. A.": "Q25136955","Ferrari, Pablo": "Q25136955",
"Ferreira, C E": "Q96606948","Ferreira, C. E.": "Q96606948","Ferreira, Carlos Eduardo": "Q96606948",
"Ferreira, R F": "Q105708552","Ferreira, R. F.": "Q105708552","Ferreira, Ricardo Felipe": "Q105708552",
"Ferreira, S M S P": "Q101236264","Ferreira, S. M. S. P.": "Q101236264","Ferreira, Sueli M. S. P.": "Q101236264","Ferreira, Sueli Mara Soares Pinto": "Q101236264",
"Figueiredo, A M G": "Q105708380","Figueiredo, A. M. G.": "Q105708380","Figueiredo, Ana Maria G": "Q105708380","Figueiredo, Ana Maria Graciano": "Q105708380",
"Figuerola, W B": "Q87954813","Figuerola, W. B.": "Q87954813","Figuerola, Wilfredo Blanco": "Q87954813",
"Fontana, A P": "Q105708381","Fontana, A. P.": "Q105708381","Fontana, Ana Paula": "Q105708381",
"Fontenele, A J": "Q99520953","Fontenele, A. J.": "Q99520953","Fontenele, Antonio J.": "Q99520953",
"Fraiman, D": "Q42321587","Fraiman, D.": "Q42321587","Fraiman, Daniel": "Q42321587",
"Fraiman, R": "Q51063811","Fraiman, R.": "Q51063811","Fraiman, Ricardo": "Q51063811",
"Frankl, P": "Q718082","Frankl, P.": "Q718082","Frankl, Peter": "Q718082","Frankl, Péter": "Q718082",
"Fregni, F": "Q33277616","Fregni, F.": "Q33277616","Fregni, Felipe": "Q33277616",
"Frondana, I M": "Q105708464","Frondana, I. M.": "Q105708464","Frondana, Iara M.": "Q105708464","Frondana, Iara Moreira": "Q105708464",
"Fujita, A": "Q105708383","Fujita, A.": "Q105708383","Fujita, André": "Q105708383",
"Fujita, A": "Q88797359","Fujita, A.": "Q88797359","Fujita, André": "Q88797359",
"Furtado Neto, R": "Q105708548","Furtado Neto, R.": "Q105708548","Furtado, R": "Q105708548","Furtado, R.": "Q105708548","Furtado, Raimundo": "Q105708548","Neto, R F": "Q105708548","Neto, R. F.": "Q105708548","Neto, Raimundo Furtado": "Q105708548",
"Galera, E F": "Q98767064","Galera, E. F.": "Q98767064","Galera, Emilio F.": "Q98767064","Galera, Emilio Frari": "Q98767064",
"Gallesco, C": "Q105708411","Gallesco, C F": "Q105708411","Gallesco, C.": "Q105708411","Gallesco, C. F.": "Q105708411","Gallesco, Christophe": "Q105708411","Gallesco, Christophe Frédéric": "Q105708411",
"Gallo, A G G": "Q98497353","Gallo, A. G. G.": "Q98497353","Gallo, Alexsandro Giacomo Grimbert": "Q98497353","Gallo, S": "Q98497353","Gallo, S.": "Q98497353","Gallo, Sandro": "Q98497353",
"Galves, A": "Q17489997","Galves, A.": "Q17489997","Galves, Antonio": "Q17489997",
"García, A M": "Q45296816","García, A. M.": "Q45296816","García, Adolfo M": "Q45296816","García, Adolfo M.": "Q45296816",
"García, J": "Q105708472","Garcia, J E": "Q105708472","García, J E": "Q105708472","García, J.": "Q105708472","Garcia, J. E.": "Q105708472","García, J. E.": "Q105708472","García, Jesús E.": "Q105708472","Garcia, Jesús Enrique": "Q105708472","García, Jesús Enrique": "Q105708472",
"Garcia, M A C": "Q88740427","Garcia, M. A. C.": "Q88740427","Garcia, Marco A C": "Q88740427","Garcia, Marco Antonio Cavalcanti": "Q88740427",
"Garcia, N": "Q59267334","Garcia, N L": "Q59267334","Garcia, N.": "Q59267334","Garcia, N. L.": "Q59267334","Garcia, Nancy": "Q59267334","Garcia, Nancy L.": "Q59267334",
"García-Cordero, I": "Q85551787","García-Cordero, I.": "Q85551787","García-Cordero, Indira": "Q85551787",
"Garivier, A": "Q102572866","Garivier, A.": "Q102572866","Garivier, Aurélien": "Q102572866",
"Girardi-Schappo, M": "Q96034878","Girardi-Schappo, M.": "Q96034878","Girardi-Schappo, Mauricio": "Q96034878",
"Gollo, L L": "Q41046680","Gollo, L. L.": "Q41046680","Gollo, Leonardo L.": "Q41046680",
"Gomes, M K": "Q105708516","Gomes, M. K.": "Q105708516","Gomes, Maria Katia": "Q105708516","Gomes, Maria Kátia": "Q105708516",
"González, N H": "Q98767039","González, N. H.": "Q98767039","González, Noslen Hernández": "Q98767039","Hernández, N": "Q98767039","Hernández, N.": "Q98767039","Hernández, Noslen": "Q98767039",
"González-Lopez, V": "Q105708582","González-López, V": "Q105708582","González-López, V A": "Q105708582","González-Lopez, V.": "Q105708582","González-López, V.": "Q105708582","González-López, V. A.": "Q105708582","González-López, V.A.": "Q105708582","González-López, VA": "Q105708582","González-López, VA.": "Q105708582","González-Lopez, Veronica": "Q105708582","González-López, Veronica": "Q105708582","González-López, Verónica A.": "Q105708582","González-López, Verónica Andrea": "Q105708582",
"Goto-Silva, L": "Q105708505","Goto-Silva, L.": "Q105708505","Goto-Silva, Livia": "Q105708505","Silva, L G": "Q105708505","Silva, L. G.": "Q105708505","Silva, Lívia Goto": "Q105708505",
"Graeff, C F O": "Q105708400","Graeff, C. F. O.": "Q105708400","Graeff, Carlos F. O.": "Q105708400","Graeff, Carlos Frederico de Oliveira": "Q105708400",
"Griffiths, S": "Q105708565","Griffiths, S.": "Q105708565","Griffiths, Simon": "Q105708565",
"Grigorescu, I": "Q98767072","Grigorescu, I.": "Q98767072","Grigorescu, Ilie": "Q98767072",
"Gubitoso, M D": "Q80093202","Gubitoso, M. D.": "Q80093202","Gubitoso, Marco D": "Q80093202","Gubitoso, Marco D.": "Q80093202",
"Guerreiro Júnior, A R": "Q105708391","Guerreiro Júnior, A. R.": "Q105708391","Guerreiro, A": "Q105708391","Guerreiro, A.": "Q105708391","Guerreiro, Antonio": "Q105708391","Júnior, A R G": "Q105708391","Júnior, A. R. G.": "Q105708391","Júnior, Antonio Roberto Guerreiro": "Q105708391",
"Guidelli,  J": "Q105708425","Guidelli, . J.": "Q105708425","Guidelli, E J": "Q105708425","Guidelli, E. J.": "Q105708425","Guidelli, Eder J.": "Q105708425","Guidelli, Éder José": "Q105708425",
"Guimarães, C O": "Q105708403","Guimarães, C. O.": "Q105708403","Guimarães, Carlos Otávio": "Q105708403",
"Guimarães, T T": "Q105708575","Guimarães, T. T.": "Q105708575","Guimarães, Thiago T": "Q105708575","Guimarães, Thiago Teixeira": "Q105708575",
"Hadadian, Y": "Q105708587","Hadadian, Y.": "Q105708587","Hadadian, Yaser": "Q105708587",
"Hàn, H": "Q105708461","Hàn, H.": "Q105708461","Hàn, Hiep": "Q105708461","Hàn, Hiệp": "Q105708461",
"Han, J": "Q105708473","Han, J.": "Q105708473","Han, Jie": "Q105708473",
"Helene, A F": "Q59275932","Helene, A. F.": "Q59275932","Helene, André F": "Q59275932","Helene, André F.": "Q59275932","Helene, André Frazão": "Q59275932",
"Higa, G": "Q105708457","Higa, G S V": "Q105708457","Higa, G.": "Q105708457","Higa, G. S. V.": "Q105708457","Higa, Guilherme": "Q105708457","Higa, Guilherme Shigueto Vilar": "Q105708457",
"Hodara, P": "Q98767051","Hodara, P.": "Q98767051","Hodara, Pierre": "Q98767051",
"Holanda, A J": "Q105708372","Holanda, A. J.": "Q105708372","Holanda, Adriano de Jesus": "Q105708372","Holanda, Adriano J.": "Q105708372",
"Holgado, L A": "Q105708494","Holgado, L. A.": "Q105708494","Holgado, Leandro A.": "Q105708494","Holgado, Leandro de Andrade": "Q105708494",
"Hoppen, C": "Q105708402","Hoppen, C.": "Q105708402","Hoppen, Carlos": "Q105708402",
"Iambartsev, A": "Q59276192","Iambartsev, A.": "Q59276192","Iambartsev, Anatoli": "Q59276192",
"Iarosz, K": "Q105708490","Iarosz, K C": "Q105708490","Iarosz, K.": "Q105708490","Iarosz, K. C.": "Q105708490","Iarosz, Kelly": "Q105708490","Iarosz, Kelly Cristiane": "Q105708490",
"Ibáñez, A": "Q42326901","Ibáñez, A.": "Q42326901","Ibáñez, Agustín": "Q42326901",
"Imamura, M": "Q51769976","Imamura, M.": "Q51769976","Imamura, Marta": "Q51769976",
"Initiative, A D N": "Q4738819","Initiative, A. D. N.": "Q4738819","Initiative, Alzheimer’s Disease Neuroimaging": "Q4738819","Initiative, Alzheimer's Disease Neuroimaging": "Q4738819",
"Iusem, A N": "Q105708374","Iusem, A. N.": "Q105708374","Iusem, Alfredo N.": "Q105708374","Iusem, Alfredo Noel": "Q105708374",
"Javitt, D C": "Q63509536","Javitt, D. C.": "Q63509536","Javitt, Daniel C": "Q63509536",
"Jenssen, M": "Q105708524","Jenssen, M.": "Q105708524","Jenssen, Matthew": "Q105708524",
"Kamiji, N L": "Q98767053","Kamiji, N. L.": "Q98767053","Kamiji, Nilton L.": "Q98767053","Kamiji, Nilton Liuji": "Q98767053",
"Karmirian, K": "Q105708489","Karmirian, K B G": "Q105708489","Karmirian, K.": "Q105708489","Karmirian, K. B. G.": "Q105708489","Karmirian, Karina": "Q105708489","Karmirian, Karina Bento Girão": "Q105708489",
"Kihara, A": "Q46507769","Kihara, A H": "Q46507769","Kihara, A.": "Q46507769","Kihara, A. H.": "Q46507769","Kihara, Alexandre": "Q46507769","Kihara, Alexandre H.": "Q46507769",
"Kinoshita, A": "Q42819830","Kinoshita, A.": "Q42819830","Kinoshita, Angela": "Q42819830",
"Kinouchi, O": "Q51019020","Kinouchi, O.": "Q51019020","Kinouchi, Osame": "Q51019020",
"Kohayakawa, Y": "Q20021278","Kohayakawa, Y.": "Q20021278","Kohayakawa, Yoshiharu": "Q20021278",
"Koike, B D V": "Q90218817","Koike, B. D. V.": "Q90218817","Koike, Bruna Del Vechio": "Q90218817",
"Konstadinidis, P B": "Q105708538","Konstadinidis, P. B.": "Q105708538","Konstadinidis, P.B.": "Q105708538","Konstadinidis, Pavlos Bahia": "Q105708538","Konstadinidis, PB": "Q105708538","Konstadinidis, PB.": "Q105708538",
"Kosch, O": "Q90774599","Kosch, O.": "Q90774599","Kosch, Olaf": "Q90774599",
"Kral, D": "Q105708415","Kral, D.": "Q105708415","Kral, Daniel": "Q105708415",
"Kráľ, D": "Q21062080","Kráľ, D.": "Q21062080","Kráľ, Daniel": "Q21062080","Král’, D": "Q21062080","Král’, D.": "Q21062080","Král’, Daniel": "Q21062080",
"Krell, N": "Q98767038","Krell, N.": "Q98767038","Krell, Nathalie": "Q98767038",
"Lambert, R": "Q105708558","Lambert, R.": "Q105708558","Lambert, Rodrigo": "Q105708558",
"Lameu, E": "Q105708432","Lameu, E L": "Q105708432","Lameu, E.": "Q105708432","Lameu, E. L.": "Q105708432","Lameu, Ewandson": "Q105708432","Lameu, Ewandson Luiz": "Q105708432",
"Leao, R": "Q73571931","Leao, R.": "Q73571931","Leao, Ricardo": "Q73571931",
"Lee, S J": "Q102398998","Lee, S. J.": "Q102398998","Lee, Sang June": "Q102398998",
"Lefmann, H": "Q102751650","Lefmann, H.": "Q102751650","Lefmann, Hanno": "Q102751650",
"Leite, J P": "Q105708478","Leite, J. P.": "Q105708478","Leite, Joao Pereira": "Q105708478","Leite, João Pereira": "Q105708478",
"Leite, L": "Q105708503","Leite, L.": "Q105708503","Leite, Lígia": "Q105708503","Moraes, L S L": "Q105708503","Moraes, L. S. L.": "Q105708503","Moraes, Lígia de Souza Leite": "Q105708503",
"Leite, T S": "Q105708571","Leite, T. S.": "Q105708571","Leite, Tatiana Silva": "Q105708571",
"Lemes, R B": "Q58669471","Lemes, R. B.": "Q58669471","Lemes, Renan B.": "Q58669471","Lemes, Renan Barbosa": "Q58669471",
"Lemos, T": "Q46575072","Lemos, T.": "Q46575072","Lemos, Thiago": "Q46575072",
"Leonardi, F": "Q105708442","Leonardi, F G": "Q105708442","Leonardi, F.": "Q105708442","Leonardi, F. G.": "Q105708442","Leonardi, Florencia": "Q105708442","Leonardi, Florencia Graciela": "Q105708442",
"Libourel, PA": "Q63380074","Libourel, PA.": "Q63380074","Libourel, Paul-Antoine": "Q63380074",
"Lima, B R S": "Q105708396","Lima, B. R. S.": "Q105708396","Lima, Bia Ramalho dos Santos": "Q105708396","Ramalho, B L": "Q105708396","Ramalho, B. L.": "Q105708396","Ramalho, Bia L": "Q105708396","Ramalho, Bia L.": "Q105708396","Ramalho, Bia Lima": "Q105708396",
"Lima, F D ": "Q105708443","Lima, F. D.": "Q105708443","Lima, Françoise Dantas de": "Q105708443",
"Lima, R P P ": "Q105708550","Lima, R. P. P.": "Q105708550","Lima, Renata Pazzini Prado de": "Q105708550","Pazzini, R": "Q105708550","Pazzini, R.": "Q105708550","Pazzini, Renata": "Q105708550",
"Lobão-Soares, B": "Q57024807","Lobão-Soares, B.": "Q57024807","Lobão-Soares, Bruno": "Q57024807",
"Löcherbach, E": "Q59267761","Löcherbach, E.": "Q59267761","Löcherbach, Eva": "Q59267761",
"Logachov, A V": "Q99520954","Logachov, A. V.": "Q99520954","Logachov, Artem V.": "Q99520954",
"Lopes, J A F": "Q105708483","Lopes, J. A. F.": "Q105708483","Lopes, José Augusto Fernandes": "Q105708483",
"Lopes, P G": "Q105708542","Lopes, P. G.": "Q105708542","Lopes, Priscila Garcia": "Q105708542",
"Lopes-dos-Santos, V": "Q57024791","Lopes-dos-Santos, V.": "Q57024791","Lopes-dos-Santos, Vítor": "Q57024791",
"Lotfi, N": "Q105708532","Lotfi, N.": "Q105708532","Lotfi, Nastaran": "Q105708532",
"Ludwig, G": "Q105708458","Ludwig, G V N": "Q105708458","Ludwig, G.": "Q105708458","Ludwig, G. V. N.": "Q105708458","Ludwig, Guilherme": "Q105708458","Ludwig, Guilherme Vieira Nunes": "Q105708458",
"Luppi, PH": "Q37829112","Luppi, PH.": "Q37829112","Luppi, Pierre-Hervé": "Q37829112",
"Machado, B H": "Q88366237","Machado, B. H.": "Q88366237","Machado, Benedito H": "Q88366237",
"Maciel-Pinheiro, P T": "Q105708537","Maciel-Pinheiro, P. T.": "Q105708537","Maciel-Pinheiro, Paulo de Tarso": "Q105708537","Pinheiro, P T M": "Q105708537","Pinheiro, P. T. M.": "Q105708537","Pinheiro, Paulo de Tarso Maciel": "Q105708537",
"Maia, P P C": "Q105708539","Maia, P. P. C.": "Q105708539","Maia, Pedro P C": "Q105708539","Maia, Pedro Petrovitch Caetano": "Q105708539",
"Malloy-Diniz, L F": "Q47809772","Malloy-Diniz, L. F.": "Q47809772","Malloy-Diniz, Leandro F": "Q47809772",
"Manços, G R": "Q105708454","Manços, G. R.": "Q105708454","Manços, Giovanne de Rosso": "Q105708454",
"Mandel, A": "Q105708392","Mandel, A.": "Q105708392","Mandel, Arnaldo": "Q105708392",
"Marcos, E": "Q50548784","Marcos, E.": "Q50548784","Marcos, Encarni": "Q50548784",
"Marques, L": "Q105708497","Marques, L.": "Q105708497","Marques, Leonardo": "Q105708497",
"Martins, E F": "Q105708427","Martins, E. F.": "Q105708427","Martins, Eduardo F": "Q105708427","Martins, Eduardo Furtado": "Q105708427",
"Martins-de-Souza, D": "Q105708416","Martins-de-Souza, D.": "Q105708416","Martins-de-Souza, Daniel": "Q105708416",
"Matias, F S": "Q56985126","Matias, F. S.": "Q56985126","Matias, Fernanda S": "Q56985126",
"Matsuda, R H": "Q105708549","Matsuda, R. H.": "Q105708549","Matsuda, Renan Hiroshi": "Q105708549",
"Medeiros, I G": "Q105708465","Medeiros, I. G.": "Q105708465","Medeiros, Inácio Gomes": "Q105708465",
"Medeiros, S L S": "Q105708569","Medeiros, S. L. S.": "Q105708569","Medeiros, Sylvia Lima de Souza": "Q105708569",
"Miranda, J G V": "Q91166430","Miranda, J. G. V.": "Q91166430","Miranda, José G V": "Q91166430","Miranda, Jose Garcia Vivas": "Q91166430",
"Miranda, M F": "Q105708528","Miranda, M. F.": "Q105708528","Miranda, Michelle F": "Q105708528","Miranda, Michelle Ferreira": "Q105708528",
"Mirasso, C R": "Q50634350","Mirasso, C. R.": "Q50634350","Mirasso, Claudio R": "Q50634350","Mirasso, Claudio R.": "Q50634350",
"Miyazawa, F K": "Q57000016","Miyazawa, F. K.": "Q57000016","Miyazawa, Flávio Keidi": "Q57000016",
"Mogulskii, A A": "Q99520952","Mogulskii, A. A.": "Q99520952","Mogulskii, Anatolii Alfredovich": "Q99520952",
"Montoro, A M G": "Q87546291","Montoro, A. M. G.": "Q87546291","Montoro, Aldana M González": "Q87546291",
"Mora, E A R": "Q105708430","Mora, E. A. R.": "Q105708430","Mora, Erika Alejandra Rada": "Q105708430","Rada-Mora, E A": "Q105708430","Rada-Mora, E. A.": "Q105708430","Rada-Mora, Erika Alejandra": "Q105708430",
"Moraes, L C": "Q105708491","Moraes, L. C.": "Q105708491","Moraes, Larissa Cristina": "Q105708491",
"Moraes, R": "Q105758529","Moraes, R.": "Q105758529","Moraes, Renato": "Q105758529",
"Moreira, C G": "Q105708401","Moreira, C G T A": "Q105708401","Moreira, C. G.": "Q105708401","Moreira, C. G. T. A.": "Q105708401","Moreira, Carlos Gustavo": "Q105708401","Moreira, Carlos Gustavo Tamm de Araujo": "Q105708401",
"Moreira, L": "Q98767060","Moreira, L.": "Q98767060","Moreira, Lucas": "Q98767060",
"Morris, R": "Q105708553","Morris, R D": "Q105708553","Morris, R.": "Q105708553","Morris, R. D.": "Q105708553","Morris, Robert": "Q105708553","Morris, Robert David": "Q105708553",
"Morrison, N": "Q105708534","Morrison, N N": "Q105708534","Morrison, N.": "Q105708534","Morrison, N. N.": "Q105708534","Morrison, Natasha": "Q105708534","Morrison, Natasha Naina": "Q105708534",
"Mota, G O": "Q105708456","Mota, G. O.": "Q105708456","Mota, G.O.": "Q105708456","Mota, GO": "Q105708456","Mota, GO.": "Q105708456","Mota, Guilherme Oliveira": "Q105708456",
"Mota, N B": "Q61478655","Mota, N. B.": "Q61478655","Mota, Natalia B": "Q61478655","Mota, Natália B": "Q61478655","Mota, Natalia B.": "Q61478655","Mota, Natália B.": "Q61478655","Mota, Natália Bezerra": "Q61478655",
"Mota-Rolim, S A": "Q105708563","Mota-Rolim, S. A.": "Q105708563","Mota-Rolim, Sergio A": "Q105708563","Mota-Rolim, Sérgio A": "Q105708563","Rolim, S A M": "Q105708563","Rolim, S. A. M.": "Q105708563","Rolim, Sérgio Arthuro Mota": "Q105708563",
"Najman, F A": "Q99520956","Najman, F. A.": "Q99520956","Najman, Fernando Araujo": "Q99520956",
"Naschold, A": "Q105708386","Naschold, A M C": "Q105708386","Naschold, A.": "Q105708386","Naschold, A. M. C.": "Q105708386","Naschold, Angela": "Q105708386","Naschold, Angela Maria Chuvas": "Q105708386",
"Nascimento, A S": "Q105708376","Nascimento, A. S.": "Q105708376","Nascimento, Amanda S.": "Q105708376","Silva, A S N ": "Q105708376","Silva, A. S. N.": "Q105708376","Silva, Amanda Sávio Nascimento e": "Q105708376",
"Nascimento, G": "Q105708447","Nascimento, G C": "Q105708447","Nascimento, G C ": "Q105708447","Nascimento, G.": "Q105708447","Nascimento, G. C.": "Q105708447","Nascimento, George C": "Q105708447","Nascimento, George Carlos do": "Q105708447",
"Neto, O M P": "Q105708536","Neto, O. M. P.": "Q105708536","Neto, Octávio Marques Pontes": "Q105708536","Pontes Neto, O M": "Q105708536","Pontes Neto, O. M.": "Q105708536","Pontes-Neto, O M": "Q105708536","Pontes-Neto, O. M.": "Q105708536","Pontes-Neto, Octávio Marques": "Q105708536",
"Nevins, C A N R": "Q105708412","Nevins, C. A. N. R.": "Q105708412","Nevins, Cilene Aparecida Nunes Rodrigues": "Q105708412","Rodrigues, C": "Q105708412","Rodrigues, C.": "Q105708412","Rodrigues, Cilene": "Q105708412",
"Olazar, M R": "Q105708515","Olazar, M R R": "Q105708515","Olazar, M. R.": "Q105708515","Olazar, M. R. R.": "Q105708515","Olazar, Margarita Ramona Ruiz": "Q105708515","Olazar, Margarita Ruiz": "Q105708515","Ruiz-Olazar, M": "Q105708515","Ruiz-Olazar, M.": "Q105708515","Ruiz-Olazar, Margarita": "Q105708515",
"Oliveira, J B C ": "Q105708469","Oliveira, J. B. C.": "Q105708469","Oliveira, Jaime Bruno Cirne de": "Q105708469",
"Oliveira, J M": "Q105708485","Oliveira, J M ": "Q105708485","Oliveira, J. M.": "Q105708485","Oliveira, José M de": "Q105708485","Oliveira, José Magalhães de": "Q105708485",
"Oliveira, L A": "Q88046006","Oliveira, L A S": "Q88046006","Oliveira, L A S ": "Q88046006","Oliveira, L A S D": "Q88046006","Oliveira, L. A.": "Q88046006","Oliveira, L. A. S.": "Q88046006","Oliveira, L. A. S. D.": "Q88046006","Oliveira, Laura A": "Q88046006","Oliveira, Laura A S De": "Q88046006","Oliveira, Laura Alice Santos de": "Q88046006",
"Oliveira, R I": "Q105708556","Oliveira, R I M F ": "Q105708556","Oliveira, R. I.": "Q105708556","Oliveira, R. I. M. F.": "Q105708556","Oliveira, Roberto I.": "Q105708556","Oliveira, Roberto Imbuzeiro": "Q105708556","Oliveira, Roberto Imbuzeiro Moraes Felinto de": "Q105708556",
"Ost, G": "Q98767065","Ost, G.": "Q98767065","Ost, Guilherme": "Q98767065",
"Paiva, F F G": "Q105708433","Paiva, F F G ": "Q105708433","Paiva, F. F. G.": "Q105708433","Paiva, Fábio F. G.": "Q105708433","Paiva, Fábio Friol Guedes de": "Q105708433",
"Paiva, M D": "Q105708529","Paiva, M M M ": "Q105708529","Paiva, M. D.": "Q105708529","Paiva, M. M. M.": "Q105708529","Paiva, Mizziara De": "Q105708529","Paiva, Mizziara Marlen Matias de": "Q105708529",
"Paixão, F ": "Q59265872","Paixão, F J ": "Q59265872","Paixão, F.": "Q59265872","Paixão, F. J.": "Q59265872","Paixão, Fernando da": "Q59265872","Paixão, Fernando Jorge da": "Q59265872",
"Palaniyappan, L": "Q47447325","Palaniyappan, L.": "Q47447325","Palaniyappan, Lena": "Q47447325",
"Papa, J P": "Q105708477","Papa, J. P.": "Q105708477","Papa, João P": "Q105708477","Papa, João Paulo": "Q105708477",
"Papageorgiou, I": "Q98767050","Papageorgiou, I.": "Q98767050","Papageorgiou, Ioannis": "Q98767050",
"Parente, R F": "Q105708555","Parente, R. F.": "Q105708555","Parente, Roberto F.": "Q105708555","Parente, Roberto Freitas": "Q105708555",
"Parmentier, R": "Q94521436","Parmentier, R.": "Q94521436","Parmentier, Régis": "Q94521436",
"Pasquale, R ": "Q105708554","Pasquale, R.": "Q105708554","Pasquale, Roberto de": "Q105708554",
"Pavan, T Z": "Q50679823","Pavan, T. Z.": "Q50679823","Pavan, Theo Z": "Q50679823","Pavan, Theo Z.": "Q50679823",
"Pavão, R": "Q105708559","Pavão, R.": "Q105708559","Pavão, Rodrigo": "Q105708559",
"Pechersky, E": "Q105708431","Pechersky, E.": "Q105708431","Pechersky, Eugene": "Q105708431",
"Pegorin, P": "Q105708544","Pegorin, P.": "Q105708544","Pegorin, Priscila": "Q105708544",
"Pena, R F O": "Q87640743","Pena, R FO": "Q87640743","Pena, R. F. O.": "Q87640743","Pena, R. FO.": "Q87640743","Pena, Rodrigo F O": "Q87640743","Pena, Rodrigo Felipe de Oliveira": "Q87640743","Pena, Rodrigo FO": "Q87640743",
"Pereira, D R": "Q105708417","Pereira, D. R.": "Q105708417","Pereira, Danillo R": "Q105708417","Pereira, Danillo Roberto": "Q105708417",
"Pereira, T": "Q105708578","Pereira, T.": "Q105708578","Pereira, Tiago": "Q105708578","Silva, T P ": "Q105708578","Silva, T. P.": "Q105708578","Silva, Tiago Pereira da": "Q105708578",
"Peres, A S C": "Q105708384","Peres, A. S. C.": "Q105708384","Peres, André Salles Cunha": "Q105708384",
"Peschanski, J A": "Q75853182","Peschanski, J. A.": "Q75853182","Peschanski, João Alexandre": "Q75853182",
"Piemonte, M E P": "Q59268254","Piemonte, M. E. P.": "Q59268254","Piemonte, Maria Elisa P.": "Q59268254","Piemonte, Maria Elisa Pimentel": "Q59268254",
"Pinheiro, S": "Q105708567","Pinheiro, S G V": "Q105708567","Pinheiro, S.": "Q105708567","Pinheiro, S. G. V.": "Q105708567","Pinheiro, Sylvia": "Q105708567","Pinheiro, Sylvia Galvão de Vasconcelos": "Q105708567",
"Pinto, D R": "Q105708424","Pinto, D. R.": "Q105708424","Pinto, Douglas Rodrigues": "Q105708424",
"Pinto, II L D": "Q105708468","Pinto, II. L. D.": "Q105708468","Pinto, Italo'Ivo Lima Dias": "Q105708468",
"Pinto, T M": "Q105708573","Pinto, T. M.": "Q105708573","Pinto, Thiago M": "Q105708573","Pinto, Thiago Matos": "Q105708573",
"Piqueira, J R C": "Q92621215","Piqueira, J. R. C.": "Q92621215","Piqueira, Jose Roberto Castilho": "Q92621215","Piqueira, José Roberto Castilho": "Q92621215",
"Planche, L": "Q98767062","Planche, L B": "Q98767062","Planche, L.": "Q98767062","Planche, L. B.": "Q98767062","Planche, Léo": "Q98767062","Planche, Léo Benoit": "Q98767062",
"Pons, D K": "Q105708421","Pons, D. K.": "Q105708421","Pons, Diego K.": "Q105708421","Pons, Diego Kleinübing": "Q105708421",
"Porta, L D": "Q92084707","Porta, L. D.": "Q92084707","Porta, Leonardo Dalla": "Q92084707",
"Potratz, T F": "Q105708576","Potratz, T. F.": "Q105708576","Potratz, Thiara Ferreira": "Q105708576",
"Pouzat, C": "Q57034680","Pouzat, C.": "Q57034680","Pouzat, Christophe": "Q57034680",
"Pozzo, T": "Q41049756","Pozzo, T.": "Q41049756","Pozzo, Thierry": "Q41049756",
"Presutti, E": "Q93261519","Presutti, E.": "Q93261519","Presutti, Errico": "Q93261519",
"Protachevicz, P": "Q87722843","Protachevicz, P R": "Q87722843","Protachevicz, P.": "Q87722843","Protachevicz, P. R.": "Q87722843","Protachevicz, Paulo": "Q87722843",
"Queiroz, C M": "Q63917274","Queiroz, C. M.": "Q63917274","Queiroz, Claudio M": "Q63917274",
"Rangel, M L": "Q105708517","Rangel, M L S": "Q105708517","Rangel, M. L.": "Q105708517","Rangel, M. L. S.": "Q105708517","Rangel, Maria Luíza": "Q105708517","Rangel, Maria Luiza Sales": "Q105708517","Rangel, Maria Luíza Sales": "Q105708517",
"Raposo, E P": "Q73162718","Raposo, E. P.": "Q73162718","Raposo, Ernesto P": "Q73162718","Raposo, Ernesto P.": "Q73162718",
"Rehen, S": "Q10374207","Rehen, S.": "Q10374207","Rehen, Stevens": "Q10374207",
"Rennó-Costa, C": "Q41044410","Rennó-Costa, C.": "Q41044410","Rennó-Costa, César": "Q41044410",
"Resende, A": "Q105708370","Resende, A C": "Q105708370","Resende, A.": "Q105708370","Resende, A. C.": "Q105708370","Resende, Adara": "Q105708370","Resende, Adara Cabral": "Q105708370",
"Reynaud-Bouret, P": "Q98767042","Reynaud-Bouret, P.": "Q98767042","Reynaud-Bouret, Patricia": "Q98767042",
"Ribas, C E": "Q105708399","Ribas, C. E.": "Q105708399","Ribas, Carlos E.": "Q105708399","Ribas, Carlos Eduardo": "Q105708399",
"Ribeiro, M": "Q105708520","Ribeiro, M.": "Q105708520","Ribeiro, Marina": "Q105708520","Silva, M T R ": "Q105708520","Silva, M. T. R.": "Q105708520","Silva, Marina Tatiane Ribeiro da": "Q105708520",
"Ribeiro, S": "Q7508008","Ribeiro, S.": "Q7508008","Ribeiro, Sidarta": "Q7508008",
"Ribeiro, T L": "Q105708577","Ribeiro, T. L.": "Q105708577","Ribeiro, Tiago L": "Q105708577","Ribeiro, Tiago Lins": "Q105708577",
"Rifo, L": "Q105708492","Rifo, L L R": "Q105708492","Rifo, L R": "Q105708492","Rifo, L.": "Q105708492","Rifo, L. L. R.": "Q105708492","Rifo, L. R.": "Q105708492","Rifo, Laura": "Q105708492","Rifo, Laura L. R.": "Q105708492","Rifo, Laura Leticia Ramos": "Q105708492","Rifo, Laura R.": "Q105708492",
"Rivero, T": "Q105708574","Rivero, T S": "Q105708574","Rivero, T.": "Q105708574","Rivero, T. S.": "Q105708574","Rivero, Thiago": "Q105708574","Rivero, Thiago Strahler": "Q105708574",
"Roberts, J A": "Q59682165","Roberts, J. A.": "Q59682165","Roberts, James A": "Q59682165",
"Rödl, V": "Q2484840","Rödl, V.": "Q2484840","Rödl, Vojtěch": "Q2484840",
"Rodrigues, A J": "Q57331982","Rodrigues, A. J.": "Q57331982","Rodrigues, Ana João": "Q57331982",
"Rodrigues, E C": "Q59691144","Rodrigues, E. C.": "Q59691144","Rodrigues, Erika C": "Q59691144","Rodrigues, Erika de Carvalho": "Q59691144",
"Rodríguez, A A": "Q74607043","Rodríguez, A. A.": "Q74607043","Rodríguez, Andrés A.": "Q74607043",
"Rolla, L T": "Q105708501","Rolla, L. T.": "Q105708501","Rolla, Leonardo T.": "Q105708501","Rolla, Leonardo Trivellato": "Q105708501",
"Romano-Silva, M A": "Q105708513","Romano-Silva, M. A.": "Q105708513","Romano-Silva, Marco A": "Q105708513","Silva, M A R": "Q105708513","Silva, M. A. R.": "Q105708513","Silva, Marco Aurelio Romano": "Q105708513",
"Romaro, C": "Q99520955","Romaro, C.": "Q99520955","Romaro, Cecília": "Q99520955",
"Rondinoni, C": "Q59662582","Rondinoni, C.": "Q59662582","Rondinoni, Carlo": "Q59662582",
"Roque, A C": "Q41662675","Roque, A. C.": "Q41662675","Roque, Antonio C.": "Q41662675","Roque, Antonio Carlos": "Q41662675","Roque, Antônio Carlos": "Q41662675",
"Rotstein, H G": "Q46461057","Rotstein, H. G.": "Q46461057","Rotstein, Horacio G.": "Q46461057",
"Ruciński, A": "Q24430148","Ruciński, A.": "Q24430148","Ruciński, Andrzej": "Q24430148",
"Sá, V W B E": "Q105708580","Sá, V. W. B. E.": "Q105708580","Sá, Vagner Wilian Batista E": "Q105708580",
"Salerno, J": "Q92978339","Salerno, J A": "Q92978339","Salerno, J.": "Q92978339","Salerno, J. A.": "Q92978339","Salerno, José": "Q92978339","Salerno, José Alexandre": "Q92978339",
"Sales, M T": "Q105708511","Sales, M T S O": "Q105708511","Sales, M. T.": "Q105708511","Sales, M. T. S. O.": "Q105708511","Sales, Marcelo Tadeu": "Q105708511","Sales, Marcelo Tadeu de Sá Oliveira": "Q105708511",
"Salmon, C E G": "Q83434787","Salmon, C. E. G.": "Q83434787","Salmon, Carlos E G": "Q83434787","Salmon, Carlos Ernesto Garrido": "Q83434787",
"Samotij, W": "Q21825536","Samotij, W.": "Q21825536","Samotij, Wojciech": "Q21825536",
"Sampaio, D R T": "Q105708422","Sampaio, D. R. T.": "Q105708422","Sampaio, Diego R T": "Q105708422","Sampaio, Diego Ronaldo Thomaz": "Q105708422",
"Sanchez, T A": "Q59553578","Sanchez, T. A.": "Q59553578","Sanchez, Tiago A": "Q59553578","Sanchez, Tiago Arruda": "Q59553578",
"Santos, C R N D": "Q105708405","Santos, C. R. N. D.": "Q105708405","Santos, Cassiano Reinert Novais Dos": "Q105708405",
"Santos, F A N": "Q105708441","Santos, F. A. N.": "Q105708441","Santos, Fernando A N": "Q105708441","Santos, Fernando Antônio Nóbrega": "Q105708441",
"Santos, J C F ": "Q105708470","Santos, J. C. F.": "Q105708470","Santos, Jean Carlos Ferreira dos": "Q105708470",
"Santos, S S": "Q105708566","Santos, S. S.": "Q105708566","Santos, Suzana de Siqueira": "Q105708566",
"Santos, S": "Q105708564","Santos, S.": "Q105708564","Santos, Sharlene": "Q105708564","Souza, S K S": "Q105708564","Souza, S. K. S.": "Q105708564","Souza, Sharlene Karla dos Santos": "Q105708564",
"Santos, T E G ": "Q105708570","Santos, T. E. G.": "Q105708570","Santos, Taiza Elaine Grespan dos": "Q105708570","Santos-Pontelli, T E G": "Q105708570","Santos-Pontelli, T. E. G.": "Q105708570","Santos-Pontelli, Taiza Elaine Grespan": "Q105708570",
"Saraiva, M A": "Q105708521","Saraiva, M. A.": "Q105708521","Saraiva, Marley A.": "Q105708521","Saraiva, Marley Apolinario": "Q105708521",
"Sato, J R": "Q105708479","Sato, J. R.": "Q105708479","Sato, João R": "Q105708479","Sato, João Ricardo": "Q105708479",
"Saunier, G": "Q105708451","Saunier, G.": "Q105708451","Saunier, Ghislain": "Q105708451",
"Saussol, B": "Q105708395","Saussol, B.": "Q105708395","Saussol, Benoit": "Q105708395","Saussol, Benoît": "Q105708395",
"Savietto, J P": "Q105708480","Savietto, J. P.": "Q105708480","Savietto, Joice P": "Q105708480","Savietto, Joice Panzarin": "Q105708480",
"Schacht, M": "Q1908555","Schacht, M.": "Q1908555","Schacht, Mathias": "Q1908555",
"Scheffer-Teixeira, R": "Q67401788","Scheffer-Teixeira, R.": "Q67401788","Scheffer-Teixeira, Robson": "Q67401788",
"Schmaedeke, A C": "Q105708377","Schmaedeke, A. C.": "Q105708377","Schmaedeke, Ana Carolina": "Q105708377",
"Sequerra, E": "Q105708426","Sequerra, E B": "Q105708426","Sequerra, E.": "Q105708426","Sequerra, E. B.": "Q105708426","Sequerra, Eduardo": "Q105708426","Sequerra, Eduardo Bouth": "Q105708426",
"Severino, M T F": "Q105708509","Severino, M. T. F.": "Q105708509","Severino, Magno T. F.": "Q105708509","Severino, Magno Tairone de Freitas": "Q105708509",
"Shimoura, R O": "Q62071938","Shimoura, R. O.": "Q62071938","Shimoura, Renan O": "Q62071938","Shimoura, Renan O.": "Q62071938",
"Sigman, M": "Q55688837","Sigman, M.": "Q55688837","Sigman, Mariano": "Q55688837",
"Silva, A C C ": "Q105708378","Silva, A. C. C.": "Q105708378","Silva, Ana Cláudia Costa da": "Q105708378",
"Silva, D C": "Q105708419","Silva, D C L ": "Q105708419","Silva, D. C.": "Q105708419","Silva, D. C. L.": "Q105708419","Silva, Débora C": "Q105708419","Silva, Débora Cristina Lima da": "Q105708419",
"Silva, L S ": "Q105708502","Silva, L. S.": "Q105708502","Silva, Lidiane Souza da": "Q105708502","Souza, L": "Q105708502","Souza, L.": "Q105708502","Souza, Lidiane": "Q105708502",
"Silva, S R B": "Q96136948","Silva, S. R. B.": "Q96136948","Silva, Sérgio Ruschi Bergamachi": "Q96136948",
"Silva, T F": "Q99520959","Silva, T. F.": "Q99520959","Silva, Thaís Feliciano": "Q99520959",
"Silva, T P L": "Q99520960","Silva, T. P. L.": "Q99520960","Silva, Thais P. L.": "Q99520960",
"Simabucuru, G": "Q105708446","Simabucuru, G V": "Q105708446","Simabucuru, G.": "Q105708446","Simabucuru, G. V.": "Q105708446","Simabucuru, Gabriela": "Q105708446","Simabucuru, Gabriela Veltrini": "Q105708446",
"Simis, M": "Q105708510","Simis, M.": "Q105708510","Simis, Marcel": "Q105708510",
"Simões-de-Souza, F M": "Q75283680","Simões-de-Souza, F. M.": "Q75283680","Simões-de-Souza, Fábio M": "Q75283680",
"Soares, L D H": "Q105708496","Soares, L DH": "Q105708496","Soares, L. D. H.": "Q105708496","Soares, L. DH.": "Q105708496","Soares, Leonardo D. H.": "Q105708496","Soares, Leonardo D.H.": "Q105708496","Soares, Leonardo Diniz Hipólito": "Q105708496",
"Soares-Cunha, C": "Q59553599","Soares-Cunha, C.": "Q59553599","Soares-Cunha, Carina": "Q59553599",
"Sousa, J P M ": "Q105708475","Sousa, J. P. M.": "Q105708475","Sousa, João Paulo Machado de": "Q105708475",
"Sousa, N": "Q37830668","Sousa, N.": "Q37830668","Sousa, Nuno": "Q37830668",
"Souza, A C": "Q105708388","Souza, A. C.": "Q105708388","Souza, Annie C": "Q105708388","Souza, Annie da Costa": "Q105708388",
"Souza, G M P R": "Q105708450","Souza, G. M. P. R.": "Q105708450","Souza, George M P R": "Q105708450","Souza, George Miguel Perbone Robuste": "Q105708450",
"Souza, M": "Q98886965","Souza, M N ": "Q98886965","Souza, M.": "Q98886965","Souza, M. N.": "Q98886965","Souza, Marcio": "Q98886965","Souza, Marcio Nogueira de": "Q98886965",
"Souza, V H": "Q88005405","Souza, V. H.": "Q88005405","Souza, Victor Hugo": "Q88005405",
"Sperandei, S": "Q47450507","Sperandei, S.": "Q47450507","Sperandei, Sandro": "Q47450507",
"Sporns, O": "Q7082997","Sporns, O.": "Q7082997","Sporns, Olaf": "Q7082997",
"Stagni, H": "Q105708459","Stagni, H.": "Q105708459","Stagni, Henrique": "Q105708459",
"Stern, R B": "Q105708547","Stern, R. B.": "Q105708547","Stern, Rafael B": "Q105708547","Stern, Rafael B.": "Q105708547","Stern, Rafael Bassi": "Q105708547",
"Steuber, V": "Q42710534","Steuber, V.": "Q42710534","Steuber, Volker": "Q42710534",
"Stolerman, L M": "Q105708506","Stolerman, L. M.": "Q105708506","Stolerman, Lucas M.": "Q105708506","Stolerman, Lucas Martins": "Q105708506",
"Stolfi, J": "Q736074","Stolfi, J.": "Q736074","Stolfi, Jorge": "Q736074",
"Takahashi, D": "Q64169532","Takahashi, D Y": "Q64169532","Takahashi, D.": "Q64169532","Takahashi, D. Y.": "Q64169532","Takahashi, Daniel": "Q64169532","Takahashi, Daniel Y.": "Q64169532","Takahashi, Daniel Yasumasa": "Q64169532",
"Taraz, A": "Q106513116","Taraz, A.": "Q106513116","Taraz, Anusch": "Q106513116",
"Tardelli, G P": "Q105708445","Tardelli, G. P.": "Q105708445","Tardelli, Gabriela Pazin": "Q105708445",
"Thompson, P": "Q105708540","Thompson, P.": "Q105708540","Thompson, Philip": "Q105708540",
"Tinós, R": "Q84148213","Tinós, R.": "Q84148213","Tinós, Renato": "Q84148213",
"Tófoli, L F": "Q105708508","Tófoli, L F F ": "Q105708508","Tófoli, L. F.": "Q105708508","Tófoli, L. F. F.": "Q105708508","Tófoli, Luis Fernando": "Q105708508","Tófoli, Luís Fernando": "Q105708508","Tófoli, Luís Fernando Farah de": "Q105708508",
"Torres, F F": "Q105708438","Torres, F. F.": "Q105708438","Torres, Fernanda de Figueiredo": "Q105708438","Torres, Fernanda F": "Q105708438","Torres, Fernanda F.": "Q105708438",
"Tort, A B L": "Q82159242","Tort, A. B. L.": "Q82159242","Tort, Adriano B L": "Q82159242",
"Turesson, H K": "Q95975622","Turesson, H. K.": "Q95975622","Turesson, Hjalmar K": "Q95975622",
"Tzioufas, A": "Q105708369","Tzioufas, A.": "Q105708369","Tzioufas, Achillefs": "Q105708369",
"Uscapi, Y L": "Q105708586","Uscapi, Y. L.": "Q105708586","Uscapi, Yanina L": "Q105708586","Uscapi, Yanina L.": "Q105708586","Uscapi, Yanina Leon": "Q105708586",
"Valencio, A": "Q105708394","Valencio, A L S": "Q105708394","Valencio, A.": "Q105708394","Valencio, A. L. S.": "Q105708394","Valencio, Arthur": "Q105708394","Valencio, Arthur Lopes da Silva": "Q105708394",
"Vargas, C": "Q59265464","Vargas, C D": "Q59265464","Vargas, C.": "Q59265464","Vargas, C. D.": "Q59265464","Vargas, Claudia D.": "Q59265464","Vargas, Claudia Domingues": "Q59265464",
"Vasconcelos, N": "Q59553622","Vasconcelos, N.": "Q59553622","Vasconcelos, Nivaldo": "Q59553622",
"Via, G": "Q87181684","Via, G.": "Q87181684","Via, Guillem": "Q87181684",
"Vieira, B H": "Q105708397","Vieira, B. H.": "Q105708397","Vieira, Bruno Hebling": "Q105708397",
"Vieira, T M": "Q50741607","Vieira, T. M.": "Q50741607","Vieira, Taian M.": "Q50741607",
"Viola, M L L": "Q105708512","Viola, M. L. L.": "Q105708512","Viola, Márcio Luis Lanfredi": "Q105708512",
"Volchan, E": "Q105708428","Volchan, E.": "Q105708428","Volchan, Eliane": "Q105708428",
"Wakabayashi, Y": "Q59509191","Wakabayashi, Y.": "Q59509191","Wakabayashi, Yoshiko": "Q59509191",
"Weissheimer, J": "Q103747117","Weissheimer, J.": "Q103747117","Weissheimer, Janaina": "Q103747117","Weissheimer, Janaína": "Q103747117",
"Xavier, G F": "Q105708452","Xavier, G. F.": "Q105708452","Xavier, Gilberto F": "Q105708452","Xavier, Gilberto Fernando": "Q105708452",
"Yaginuma, K": "Q98767045","Yaginuma, K Y": "Q98767045","Yaginuma, K.": "Q98767045","Yaginuma, K. Y.": "Q98767045","Yaginuma, Karina Yuriko": "Q98767045",
"Zacharias, L R": "Q105708499","Zacharias, L. R.": "Q105708499","Zacharias, Leonardo Rakauskas": "Q105708499"
}

var known_publications = {
"Neurocase": "Q7002159",
"arXiv": "Q118398"
}

var known_keywords = {
"cerebellar damage": "Q106638906"
}

// Types of publications of Zotero //
var typeMapping = {
book: "Q571",
map: "Q4006",
film: "Q11424",
tvBroadcast: "Q15416",
webpage: "Q36774",
computerProgram: "Q40056",
document: "Q49848",
manuscript: "Q87167",
letter: "Q133492",
interview: "Q178651",
patent: "Q253623",
hearing: "Q545861",
presentation: "Q604733",
bill: "Q686822",
statute: "Q820655",
artwork: "Q838948",
dataset: "Q1172284",
thesis: "Q1266946",
radioBroadcast: "Q1555508",
dictionaryEntry: "Q1580166",
bookSection: "Q1980247",
case: "Q2334719",
audioRecording: "Q3302947",
newspaperArticle: "Q5707594",
forumPost: "Q7216866",
report: "Q10870555",
videoRecording: "Q30070675",
encyclopediaArticle: "Q13433827",
journalArticle: "Q13442814",
blogPost: "Q17928402",
conferencePaper: "Q23927052",
podcast: "Q24634210",
email: "Q30070439",
instantMessage: "Q30070565",
magazineArticle: "Q30070590",
};

// Labels in European Portuguese for the types of publications of Zotero //
var typeMapping_pt = {
book: "livro",
map: "mapa",
film: "filme",
tvBroadcast: "programa de televisão",
webpage: "página web",
computerProgram: "programa de computador",
document: "documento",
manuscript: "manuscrito",
letter: "carta",
interview: "entrevista",
patent: "patente",
hearing: "audiência",
presentation: "apresentação",
bill: "projeto de lei",
statute: "lei",
artwork: "obra de arte",
dataset: "conjunto de dados",
thesis: "tese de titulação",
radioBroadcast: "programa de rádio",
dictionaryEntry: "entrada no dicionário",
bookSection: "capítulo de livro",
case: "caso legal",
audioRecording: "gravação de áudio",
newspaperArticle: "artigo jornalístico",
forumPost: "publicação",
report: "relatório",
videoRecording: "gravação de vídeo",
encyclopediaArticle: "artigo enciclopédico",
journalArticle: "artigo científico",
blogPost: "publicação de blogue",
conferencePaper: "comunicação",
podcast: "podcast",
email: "correio eletrónico",
instantMessage: "mensagem instantânea",
magazineArticle: "artigo de revista",
}

// Labels in Brazilian Portuguese for the types of publications of Zotero //
var typeMapping_ptbr = {
book: "livro",
map: "mapa",
film: "filme",
tvBroadcast: "programa de televisão",
webpage: "Página web",
computerProgram: "programa de computador",
document: "documento",
manuscript: "manuscrito",
letter: "carta",
interview: "entrevista",
patent: "patente",
hearing: "audiência",
presentation: "apresentação",
bill: "projeto de lei",
statute: "lei",
artwork: "obra de arte",
dataset: "conjunto de dados",
thesis: "tese",
radioBroadcast: "programa de rádio",
dictionaryEntry: "entrada no dicionário",
bookSection: "capítulo de livro",
case: "caso legal",
audioRecording: "gravação de áudio",
newspaperArticle: "artigo jornalístico",
forumPost: "publicação",
report: "comunicado",
videoRecording: "gravação de vídeo",
encyclopediaArticle: "artigo enciclopédico",
journalArticle: "artigo científico",
blogPost: "publicação de blogue",
conferencePaper: "comunicação",
podcast: "podcast",
email: "correio eletrónico",
instantMessage: "mensagem instantânea",
magazineArticle: "artigo de revista",
}

// Labels in English for the types of publications of Zotero //
var typeMapping_en = {
book: "book",
map: "map",
film: "film",
tvBroadcast: "television program",
webpage: "web page",
computerProgram: "computer program",
document: "document",
manuscript: "manuscript",
letter: "letter",
interview: "interview",
patent: "patent",
hearing: "legal hearing",
presentation: "presentation",
bill: "bill",
statute: "legislative act",
artwork: "work of art",
dataset: "data set",
thesis: "thesis",
radioBroadcast: "radio program",
dictionaryEntry: "dictionary entry",
bookSection: "chapter",
case: "legal case",
audioRecording: "audio recording",
newspaperArticle: "news article",
forumPost: "post",
report: "report",
videoRecording: "video recording",
encyclopediaArticle: "encyclopedic article",
journalArticle: "scholarly article",
blogPost: "blog post",
conferencePaper: "conference paper",
podcast: "podcast",
email: "email",
instantMessage: "instant message",
magazineArticle: "magazine article",
}

// Labels in Spanish for the types of publications of Zotero //
var typeMapping_es = {
book: "libro",
map: "mapa",
film: "película",
tvBroadcast: "programa de televisión",
webpage: "página web",
computerProgram: "programa informático",
document: "documento",
manuscript: "manuscrito",
letter: "carta",
interview: "entrevista",
patent: "patente",
hearing: "audiencia",
presentation: "presentación",
bill: "proyecto de ley",
statute: "ley",
artwork: "obra de arte",
dataset: "conjunto de datos",
thesis: "tesis de titulación",
radioBroadcast: "programa radiofónico",
dictionaryEntry: "entrada de diccionario",
bookSection: "capítulo",
case: "caso judicial",
audioRecording: "grabación sonora",
newspaperArticle: "artículo periodístico",
forumPost: "post",
report: "informe",
videoRecording: "grabación de video",
encyclopediaArticle: "artículo de enciclopedia",
journalArticle: "artículo científico",
blogPost: "entrada en blog",
conferencePaper: "ponencia",
podcast: "programa de podcast",
email: "correo electrónico",
instantMessage: "mensaje instantáneo",
magazineArticle: "artículo de revista",
}

// Labels in French for the types of publications of Zotero //
var typeMapping_fr = {
book: "livre",
map: "carte géographique",
film: "film",
tvBroadcast: "programme télévisé",
webpage: "page web",
computerProgram: "programme informatique",
document: "document",
manuscript: "manuscrit",
letter: "lettre",
interview: "interview",
patent: "brevet",
hearing: "audition",
presentation: "présentation",
bill: "projet de loi",
statute: "loi",
artwork: "œuvre d’art",
dataset: "jeu de données",
thesis: "thèse",
radioBroadcast: "émission de radio",
dictionaryEntry: "article de dictionnaire",
bookSection: "chapitre",
case: "procédure juridique",
audioRecording: "enregistrement audio",
newspaperArticle: "article de presse",
forumPost: "post",
report: "rapport",
videoRecording: "enregistrement vidéo",
encyclopediaArticle: "article d'encyclopédie",
journalArticle: "article scientifique",
blogPost: "article de blog",
conferencePaper: "papier de conférence",
podcast: "émission ou programme en podcast",
email: "courrier électronique",
instantMessage: "message instantané",
magazineArticle: "article de magazine",
}

// Labels in German for the types of publications of Zotero //
var typeMapping_de = {
book: "Buch",
map: "Karte",
film: "Film",
tvBroadcast: "Fernsehsendung",
webpage: "Webseite",
computerProgram: "Computerprogramm",
document: "Dokument",
manuscript: "Manuskript",
letter: "Brief",
interview: "Interview",
patent: "Patent",
hearing: "Anhörung",
presentation: "Präsentation",
bill: "Gesetzentwurf",
statute: "Gesetz",
artwork: "Kunstwerk",
dataset: "Datenbasis",
thesis: "Studienabschlussarbeit",
radioBroadcast: "Hörfunksendung",
dictionaryEntry: "Wörterbucheintrag",
bookSection: "Kapitel",
case: "Rechtsfall",
audioRecording: "Tonaufnahme",
newspaperArticle: "Zeitungsartikel",
forumPost: "Post",
report: "Bericht",
videoRecording: "Videoaufnahme",
encyclopediaArticle: "enzyklopädischer Artikel",
journalArticle: "wissenschaftlicher Artikel",
blogPost: "Blogpost",
conferencePaper: "Konferenzbeitrag",
podcast: "Podcast",
email: "Email",
instantMessage: "Sofortnachricht",
magazineArticle: "Magazinartikel",
}

// simple properties with string values can be simply mapped here
var propertyMapping = {
	P356: "DOI",
	P953: "url",
	P478: "volume",
	P433: "issue",
	P304: "pages"
};

// it is important to use here the language codes in the form
// as they are also used in Wikidata for monolingual text
var languageMapping = {
	en: "Q1860",
	zh: "Q7850",
	ru: "Q7737",
	fr: "Q150",
	ja: "Q5287",
	de: "Q188",
	es: "Q1321",
	sr: "Q9299",
	pl: "Q809",
	cs: "Q9056",
	it: "Q652",
	cy: "Q9309",
	pt: "Q5146",
	"pt-br": "Q750553",
	nl: "Q7411",
	sv: "Q9027",
	ar: "Q13955",
	ko: "Q9176",
	hu: "Q9067",
	da: "Q9035",
	fi: "Q1412",
	eu: "Q8752",
	he: "Q9288",
	la: "Q397",
	nb: "Q25167",
	no: "Q9043",
	el: "Q9129",
	tr: "Q256",
	ca: "Q7026",
	sl: "Q9063",
	ro: "Q7913",
	is: "Q294",
	grc: "Q35497",
	uk: "Q8798",
	fa: "Q9168",
	hy: "Q8785",
	ta: "Q5885"
};

var identifierMapping = {
	PMID: "P698",
	PMCID: "P932",
	"JSTOR ID": "P888",
	arXiv: "P818",
	"Open Library ID": "P648",
	OCLC: "P243",
	"IMDb ID": "P345",
	DOI: "P356"
};


function zoteroItemToQuickStatements(item) {
	// Initiate with the "CREATE" command
	var statements = ['CREATE'];
	
	// Each QS command will be set in the format "LAST\tPID\tVALUE"
	var addStatement = function () {
		var args = Array.prototype.slice.call(arguments);
		statements.push('LAST\t' + args.join('\t'));
	};

	// Get the today date, for the reference
	var today = new Date();
	var dd = today.getDate();
	if (dd < 10) {
		dd = '0'+dd;
	}

	var mm = today.getMonth()+1;
	if (mm < 10) {
		mm = '0'+mm;
	}

	var yyyy = today.getFullYear();

	today = '+' + yyyy + '-' + mm + '-' + dd + 'T00:00:00Z/11';

	// Initiate the empty reference, if the item has an URL, use it as reference, with the date in which the info was retrieved (today)
	// If there is no URL, use the DOI, if exists (other urls of reference can be used)
	var ref = "";
	if (item.url) {
		ref = 'S854\t' + '"' + item.url + '"' + '\tS813\t' + today;
	}
	else if (item["DOI"]) {
		ref = 'S854\t' + '"https://doi.org/' + item["DOI"] + '"' + '\tS813\t' + today;
	}

	// P31 - instance of
	var itemType = item.itemType;

	if (typeMapping[itemType]) {
		addStatement('P31', typeMapping[itemType], ref);
	}
	
	// Labels, default is en
	if (item.language && (item.language.toLowerCase() in languageMapping)) {
		let lang = item.language.toLowerCase();
		if (lang == "pt" || lang == "pt-br") {
			addStatement('Lpt', '"' + item.title + '"');
			addStatement('Lpt-br', '"' + item.title + '"');
		}
		else {
			addStatement('L'+item.language.toLowerCase(), '"' + item.title + '"');
		}
	}
	else {
		addStatement('Len', '"' + item.title + '"');
	}
	
	// Descriptions, based on the type of document, the place of publication and the yaer of publication
	if (typeMapping[itemType]) {
		var description_pt = typeMapping_pt[itemType];
		var description_ptbr = typeMapping_ptbr[itemType];
		var description_en = typeMapping_en[itemType];
		var description_es = typeMapping_es[itemType];
		var description_fr = typeMapping_fr[itemType];
		var description_de = '';
	}

	if (item.publicationTitle) {
		description_pt = description_pt + ' de \'' + item.publicationTitle + '\'';
		description_ptbr = description_ptbr + ' de \'' + item.publicationTitle + '\'';
		description_en = description_en + ' from \'' + item.publicationTitle + '\'';
		description_es = description_es + ' de \'' + item.publicationTitle + '\'';
		description_fr = description_fr + ' de \'' + item.publicationTitle + '\'';
	}

	if (item.date) {
		var year = ZU.strToDate(item.date).year;
		if (year) {
			description_pt = description_pt + ' publicado em ' + year;
			description_ptbr = description_ptbr + ' publicado em ' + year;
			description_en = description_en + ' published in ' + year;
			description_es = description_es + ' publicado en ' + year;
			description_fr = description_fr + ' publié en ' + year;
			description_de = description_de + 'im ' + year + ' veröffentlichter ';
		}
	}
	description_de = description_de + typeMapping_de[itemType];

	addStatement('Dpt', '"' + description_pt + '"');
	addStatement('Dpt-br', '"' + description_ptbr + '"');
	addStatement('Den', '"' + description_en + '"');
	addStatement('Des', '"' + description_es + '"');
	addStatement('Dfr', '"' + description_fr + '"');
	addStatement('Dde', '"' + description_de + '"');

	// Place of publication, using the lexicon 
	if (item.publicationTitle) {
		var aux_pub = "";
		if (item.publicationTitle in known_publications) {
			aux_pub = known_publications[item.publicationTitle];
		}
		else if (item.publicationTitle.split(':')[0] in known_publications) {
			aux_pub = known_publications[item.publicationTitle.split(':')[0]];
		}
		
		if (aux_pub) {
			addStatement('P1433', aux_pub, ref);
		}
	}
	
	// Tags or keywords, using the lexicon
	if (item.tags) {
		for (tag_index in item.tags) {
			var tag = item.tags[tag_index].tag
			if (tag in known_keywords) {
				addStatement('P921', known_keywords[tag], ref);
			}
		}
	}
	
	// Identifiers, defined in propertyMapping
	for (var pnumber in propertyMapping) {
		var zfield = propertyMapping[pnumber];
		if (item[zfield]) {
			addStatement(pnumber, '"' + item[zfield] + '"', ref);
		}
	}

	// Authors
	var index = 1;
	for (var i = 0; i < item.creators.length; i++) {
		var creatorValue = item.creators[i].lastName;
		var creatorType = item.creators[i].creatorType;
		if (creatorType == "author") {

			// Here we have the function to call for the lexicon for the known authors
			// Basically, we need to check if the author has a first and last name, so we can concatenate them as "lastName, firstName"
			// If yes, than we check against the list of authors. If the author is in the list, we add their QID into the P50 property
			// Else, we add the name in the format "firstName lastName" into the P2093 property
			if (item.creators[i].firstName && neuromat_authors[creatorValue + ', ' + item.creators[i].firstName]){
				addStatement('P50', neuromat_authors[creatorValue + ', ' + item.creators[i].firstName], 'P1545', '"' + index + '"', ref);
				index++;
			}
			else {
				if (item.creators[i].firstName) {
					creatorValue = item.creators[i].firstName + ' ' + creatorValue;
				}
				addStatement('P2093', '"' + creatorValue + '"', 'P1545', '"' + index + '"', ref);
				index++;
			}
		}
	}

	// Date of publication
	if (item.date) {
		// e.g. +1967-01-17T00:00:00Z/11
		var formatedDate = ZU.strToISO(item.date);
		switch (formatedDate.length) {
			case 4:
				formatedDate += "-00-00T00:00:00Z/9";
				break;
			case 7:
				formatedDate += "-00T00:00:00Z/10";
				break;
			case 10:
				formatedDate += "T00:00:00Z/11";
				break;
			default:
				formatedDate += "/11";
		}
		addStatement('P577', '+' + formatedDate, ref);
	}

	// ISBN
	if (item.ISBN) {
		var isbnDigits = item.ISBN.replace(/-/g, '');
		if (isbnDigits.length == 13) {
			addStatement('P212', '"' + item.ISBN + '"');
		}
		if (isbnDigits.length == 10) {
			addStatement('P957', '"' + item.ISBN + '"');
		}
	}
	
	// Language of the work
	if (item.language && (item.language.toLowerCase() in languageMapping)) {
		let lang = item.language.toLowerCase();
		addStatement('P1476', lang + ':"' + item.title + '"', ref);
		addStatement('P407', languageMapping[lang], ref);
	}
	else {
		// otherwise use "und" for undetermined language
		addStatement('P1476', 'und:"' + item.title + '"', ref);
	}

	// Part of RIDC NeuroMat and financed by FAPESP in the context of the project '2013/07699-0'
	addStatement('P361', 'Q18477654', 'P8324', 'Q5508997', 'P1932', '"'+'FAPESP 2013/07699-0'+'"', ref)

	// Extra field (sometimes the identifiers are only present there. The arXiv ID is an example)
	if (item.extra) {
		var extraLines = item.extra.split('\n');
		for (var j = 0; j < extraLines.length; j++) {
			var colon = extraLines[j].indexOf(':');
			if (colon > -1) {
				var label = extraLines[j].substr(0, colon);
				var value = extraLines[j].substr(colon + 1);
				if (identifierMapping[label]) {
					addStatement(identifierMapping[label], '"' + value.trim() + '"');
				}
				if (label.match(/^P\d+$/)) {
					if (value.trim().match(/^Q\d+$/)) {
						addStatement(label, value.trim());
					}
					else {
						addStatement(label, '"' + value.trim() + '"');
					}
				}
			}
		}
	}
	
	// Return all the statements
	return statements.join('\n') + '\n';
}

function doExport() {
	var item;
	while ((item = Zotero.nextItem())) {
		Zotero.write(zoteroItemToQuickStatements(item));
	}
}
