import React, { useState, useEffect } from 'react';
import csvjson from 'csvjson'
import _ from 'lodash'
import { isCSV } from './utils'

// eslint-disable-next-line
import sampleCSV from '!raw-loader!./data/sample.csv'
import sampleJSON from './data/sample.json'

const App = () => {
  const [data, setData] = useState('')
  const [list, setList] = useState([])
  const [delimiter, setDelimiter] = useState('tab')
  const [quote, setQuote] = useState('double')
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
    if (data) {
      const list = parseData(data)
      setList(list || [])
    }
  }, [data])

  const parseCSV = data => {
    const delimiters = { comma: ',', space: /\s+/, tab: /\t+/ }
    const quotes = { single: "'", double: '"' }
    return csvjson.toObject(data, { 
      delimiter: delimiters[delimiter], 
      quote: quotes[quote],
    })
  }

  const parseData = data => {
    try {
      return JSON.parse(data)
    }
    catch (jsonErr) {
      try {
        if (!isCSV(data)) throw new Error('Not a csv')
        return parseCSV(data)
      }
      catch (err) {
        setError('Data not in a JSON or CSV format')
      }
    }
  }
  
  const handleChangeDelimiter = e => setDelimiter(e.target.value)

  const handleChangeQuote = e => setQuote(e.target.value)

  const handleChange = e => {
    setData(e.target.value)
  }

  const handlePasteSampleJSON = () => {
    setData(JSON.stringify(sampleJSON, null, 2))
  }
  
  const handlePasteSampleCSV = () => {
    setData(sampleCSV)
  }
  
  return (
    <div className='uk-container'>
      <article className='uk-section'>
        <h2>Sortable Challenge</h2>

        <h3>Input</h3>
        <form className='uk-form-stacked'>
       
          <div className='uk-margin'>
            <label className='uk-form-label'>Data</label>
            <div className='uk-form-controls'>
              <textarea className='uk-textarea' rows='8' placeholder='Paste JSON or CSV here...' value={data} onChange={handleChange} />
              {error && <div className='uk-text-danger uk-text-small mt-1'>{error}</div>}
              {!error && <div className='uk-text-muted uk-text-small mt-1'>Specify data in JSON or CSV format</div>}
            </div>
          </div>

          <div data-uk-grid>
            <div>
              <label className='uk-form-label'>Delimiter</label>
              <div className='uk-form-controls'>
                <select className='uk-select' value={delimiter} onChange={handleChangeDelimiter}>
                  <option value='comma'>Comma</option>
                  <option value='space'>Space</option>
                  <option value='tab'>Tab</option>
                </select>
              </div>
            </div>
            <div>
              <label className='uk-form-label'>Quote</label>
              <div className='uk-form-controls'>
                <select className='uk-select' value={quote} onChange={handleChangeQuote}>
                  <option value="single">Single</option>
                  <option value='double'>Double</option>
                </select>
              </div>
            </div>
          </div>

        </form>

        <div className='uk-margin'>
          <button className='uk-button uk-button-default' type='button' onClick={handlePasteSampleJSON}>
            Paste sample JSON
          </button>
          <button className='uk-button uk-button-default ml-1' type='button' onClick={handlePasteSampleCSV}>
            Paste sample CSV
          </button>
        </div>

        <h3>List</h3>
        <pre>{JSON.stringify(list, null, 2)}</pre>
      </article>
    </div>
  )
}

export default App
