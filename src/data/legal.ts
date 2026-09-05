/**
 * Datos de la sociedad que opera el sitio. Los consumen la Política de
 * Privacidad y los Términos y Condiciones en los dos idiomas, más el colofón
 * del footer y los datos estructurados, así que se editan UNA sola vez aquí y
 * se propagan a todo lo demás.
 *
 * Si alguno de los datos de identificación vuelve a quedar sin confirmar,
 * basta con anteponerle «⚠️» a su valor: `legalDataPending` lo detecta, las
 * páginas legales muestran el aviso de documento en revisión y el Layout las
 * saca del índice hasta que el dato real esté puesto.
 */
export const legalEntity = {
  /**
   * Razón social tal como se registró. En mayúsculas sostenidas en el RUT y
   * en el certificado de existencia, pero eso es cómo lo imprime la DIAN —no
   * el nombre—: se escribe con su capitalización real, que además es la de la
   * marca.
   */
  legalName: 'CTG Code SAS',

  /** NIT de la sociedad con su dígito de verificación (formato 000000000-0). */
  taxId: '902102421-8',

  /**
   * Domicilio social registrado. Solo ciudad y departamento: la sociedad no
   * tiene local abierto al público, así que declarar una dirección exacta
   * sería inventarse un sitio al que nadie puede ir.
   */
  domicile: {
    es: 'Cartagena de Indias, Bolívar, Colombia',
    en: 'Cartagena de Indias, Bolívar, Colombia',
  },

  /** Correo para ejercer derechos y consultas legales (dato real y público). */
  email: 'contacto@ctgcode.com',

  /** Fecha de última revisión de los documentos. */
  updated: {
    es: 'Septiembre 2026',
    en: 'September 2026',
  },
} as const;

/**
 * `true` mientras queden marcadores sin rellenar. El Layout lo usa para
 * mantener las páginas legales fuera del índice de Google (contenido
 * incompleto) y el sitemap para no listarlas todavía.
 */
export const legalDataPending: boolean =
  legalEntity.legalName.startsWith('⚠️') || legalEntity.taxId.startsWith('⚠️');
