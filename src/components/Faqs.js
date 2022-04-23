import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faqs = () => {
  return (
    <div className='flex flex-col justify-center items-center pb-8 pt-8'>
      <h1 className='md:text-5xl text-4xl text-white text-center p-4'>FAQs</h1>
      <div className='md:w-3/4 w-full p-4'>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>When is minting date?</Accordion.Header>
            <Accordion.Body>
              Minting date will be announced on our Discord & Telegram.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How to join ILO whitelist?</Accordion.Header>
            <Accordion.Body>
              You can join whitelist by participating in whitelist competition here. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What if I miss IGO event. Where can I buy cars?</Accordion.Header>
            <Accordion.Body>
              In our first edition we have only 7800 unique cars, if you miss IGO event you can buy NFTs on our marketplace if someone is interested in selling theirs.  
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I earn on Racers Utopia?</Accordion.Header>
            <Accordion.Body>
              You can earn by completing daily tasks, betraces, car rentals, gas station, race fee (if you own race track land), workshop.  
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> 
    </div>
  )
}

export default Faqs