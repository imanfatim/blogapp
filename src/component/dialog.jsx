import React from 'react'

const dialog = () => {
  return (
    <>
      {/*<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>*/}
<df-messenger
  intent="WELCOME"
  chat-title="helloworld"
  agent-id="eff46fcc-63d4-40c4-8d8d-f0dfef94c73a"
  language-code="en"
></df-messenger>
    </>
  )
}

export default dialog
