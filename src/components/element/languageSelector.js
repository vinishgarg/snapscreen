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
      <Dropdown.Toggle id="dropdown-langage" variant="" size="sm" className="btn btn-light">
        <i className={"fa fa-language "}></i>
        <ion-icon name="language" style={{marginRight: "0.5rem", height: 20, width: 20, float: "left"}}/>
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
