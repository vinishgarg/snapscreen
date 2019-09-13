import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { injectIntl, IntlContextConsumer, changeLocale, FormattedMessage } from 'gatsby-plugin-intl'

const LanguageSelector = () => {
  const languageName = {
    en: "English",
    de: "Deutsch"
  }
  return (
    <Dropdown className="d-inline-flex mx-auto">
      <Dropdown.Toggle id="dropdown-langage" variant="link" size="sm" className="pl-0">
        <i className={"fa fa-language mt-2 mb-1 mr-2"}></i>
        <FormattedMessage id="selectLang" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header><FormattedMessage id="selectLang" /></Dropdown.Header>
        <IntlContextConsumer>
          { ({ languages, language: currentLocale }) =>
            languages.map(language => (
              <Dropdown.Item
                key={language}
                onClick={() => changeLocale(language)}
                className={{
                  active: currentLocale === language ? `active` : ``
                }}
                >
                {languageName[language]}
              </Dropdown.Item>
            ))
          }
        </IntlContextConsumer>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default injectIntl(LanguageSelector)
