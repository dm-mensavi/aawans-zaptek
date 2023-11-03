import React from 'react'
import Header from '../../components/Header'
import CaseDetail from './CaseDetails'

function Cases() {
  return (
    <div>
      <Header pageTitle="All Cases" name="Cases" />
      <CaseDetail/>
    </div>
  )
}

export default Cases