import React from "react";

const VistaEmpresaDos = () => {
    return(
<div>
  <div class="row align-items-center mt-5 ml-4">
    <div class="col ml-5 mt-5">
      <div class="card custom-card" style={{width: "18rem"}}>
        <img
          src="https://png.pngtree.com/template/20191014/ourlarge/pngtree-real-estate-business-logo-template-building-property-development-and-construction-logo-image_317796.jpg"
          class="card-img-top" alt="..."/>
          <div class="card-body custom-card-body">
          <h5 class="card-title">Segundo lugar</h5>
        </div>
      </div>
    </div>
    <div class="col ml-5">
      <div class="card custom-card" style={{width: "18rem"}}>
        <img src="https://gestionpyme.com/wp-content/uploads/2015/09/shutterstock_227788621.jpg" class="card-img-top"
          alt="..."/>
          <div class="card-body custom-card-body">
          <h5 class="card-title">Primer lugar</h5>
        </div>
      </div>
    </div>
    <div class="col ml-5 mt-5">
      <div class="card custom-card" style={{width: "18rem"}}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAA81BMVEX///9NTU0AAABllcb8/Pz5+flLS0v8//9BQUHDw8NISEi+vr7r6+v///3///tbW1vc3Nyzs7M8PDzu7u4zMzPy8vKampp/f39ERERgYGAiIiKlpaXl5eXa2trCwsKKiorOzs52dnZtbW2Ghoaenp6SkpJklsP0//8uLi6rq6tjlMxvb28YGBhlja9mZmb+//be7fijvM5ijbjt+P/P3eYlJSUPDw+90+bZ4emFp75skq+guMvB0+G1zNFskLmBnrq1xNJkk9Jkl75cl8iBmrhmjb9hmbqRqb5di6zW6/eIrM3F0dxniL2tyd2StMng9fhoiKVhE5nkAAAPk0lEQVR4nO1dCVvayhoe4oSEELYgigI1qCSK4hJcasvBVsvpseda7///Nff7ZiYLSVistoT7zNvTpxCyfG++fWaSQ4iEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISExLtCNdsAs7FqOd4ZFP6qnVrvLGc0dYDVNCrbLdvEn9RVC/cuMGvdvKUbRj6HfwD5vNG09MpWZ935oe5oYb+p5xmvOAwrt9XGXeiqBf1VUNJo5SwjjRxH3rC6NhjwqgX9Vagto5mqu5AhqHG/s2o5fwVodsWcPp8eR9M6aBCVrpmhUmJ2rWXoMWc0iuvniB8WGOc0rO21So6UqltLq0/YaaXKo+56QO3qr6IHyOv2uhCkpL5jQAZgZYuuN5tz8sSUmYIjrgNHSs3cpp7b77VqRUDteKtbgbplCZbIcB1Sotk9tOvTmxqd2ra+mCPTYfbBlFDyQYiG30Cz9p6ui2J0hhvmLHsNrFRjiHwTPAFqsbIguOrtlcm9NIAcECojSpr4l/FjtYp9NpeiUVEznvEpBUIgI1cZQaaxIsyuzEshzYOMmygFDboXV7fPl4gvt1cXw6jF4g702DJma9H6sDrhF4KWyPDjl7tPA2+Dw/E8b3D3eTQMGDJtts/mKTHDRRvV/hp7zkYMzsbEu/8CHNF6uTbpljXbDXvZNVJtOOg7CYL9/tf+ZMO7u9LKpTIPqCopzs6KVnYjqfZ50n9M0WC/D/85g08j0B8tE1ZVd4xZDI3tVfOYiZdx/zFOb2PjwXGcB6D9+Oh9G7laWexcnZnzrepKWczB5cT5e6OfpDgJPnnfL8S+6myGkCqyiHJ56KE9zoXzMHh2KcYaMsdK9UYW40y5NJpPTlAcfx8SFmoosdPHbPL6ceYIloimkvtlCILBji/IOXiiqpLj9Hxo7KyaTwJAkAy9xeQ2MGtsjEea0NBBMz3MZC5TlMCplrFQniWd8S0vbWijkuqGzeMV80kAamryIyV+hqT4JwdzhvPoeLfQaHA3TIulRnfVhBIon7uDFGociQ2O411p5yVU40GaCvNG5oYuyuWLpAtyduB0G04fEWyHP+MnrYyO2EiLM/ns5foSGc2KMZOJNxAYQ3fhsUDTn3wbllhR02qmGKleXDWhGKhGPqfkeMcbD74/j54uXI7hx9Hl98HAcx6xqHHZ9FqqCptbq2YUh+beJfkNfo4uNOiAscnHEQtWwmjaxV93/0Bx6t3CcSWVtFIYZq/g1txvglX/K5TXUJEO7v4asp/CQSc2ugYlD3jel3vPGVxA9C2BFyZMNJ8/Wx2VVFAtCKLOA7jYZPDzyXVn705L2tMP74er0VJ6IK1krVaDXlcQfHjo972fLyD77PGxcvn8vKw93f/rYqawU9r7zOWJkCCo7/7J5WNrs1Aqa7AH1T666JkkLYxmlyCrNKk2PZYWBXNEoAixB/r7MpQzvXhFms9ZGSOoaVBqs5Jlcv+isYFRcEso4ErJfcs+QWjuMcgQaifjaGYJep9d0BzohkBm0MqitZ0P2khGmaz5oIZR1OlDbnM1NnavQUOkfRxqpdISBMlZ3AnzuaxF0RJLE1hgYv2FY2fu6P6/I+gZFhMkZKsZ55e5lrek3TsbgysNJyNAfZo6GgPhb+5yBItxJ8xev6RqPx3vI9MfEvx3PMHBUG+0HMFOnGCz99slfh2A2fM/V2yyE1LE0x0fKJxs/O0uRdCMrznRa79d5NcBCI6eNTYZqLnP/gSF84gqXOJwNZElsra8C7gNsXqBAuzl7j9f+5wgVKXj4fkyx1fiBLM3xSQmdd2nTw99nyA2FT+XMVFSmTZRY/93i/taQLrD5F4iV4OHsPHtTx4evatljo8lwmbrdwv8WkCwBA2ea7dRfswLN8ZD7XxhpDmZrmUy54I4bAgqdEeek5wfvHfPF/rhzhTBfOVPyPw6sLL6dpA2t+Rd8vJmHqZ9sHmYubkJZKh9HDj9tMFf79lVU7qKCOh0DN1sZ5PgVXJ+XjC8XeCDjYzXaQjM8PdOigvilOHgFjs/TSuJdjeO6UrGsv+08MviykvO0HNMvmgQYzVs489TGE51vNlLggG0e5yRT2U4gEa4zCJRWryp6WuhwNL5xWQWwQ3vfgh9BqUk4Y4QT3qRLGFsZzDCCJTI5zQnFBiPXI3Q1A4/OkvYzNzkZwh67v49gx2WpThaWj5PmiitR2IMzs9nV4OQKtjo4Qw1eoNnl+DqQz6YJohQUghd0DjJLDuCBIl76c0muOGwpUCahkqKDJyGY/f5vJld/REcraDujzlLZaDO8cbPLy4rXst+AaeGHojPFmSZIIVE4N6PZxPESm7iff/XZc2HqMEDC81nbqQiBoptb2n4bd5yJwdHT8eDu+enob+WpCs0mLe2spshGChr7EsX3+bxQ//sf93wvP9esKWjpO2v4rZ6a/F0D0Sai08szMxT5IMzueNT2GTPCPmtA3Bg7eV+ktYZTmlycstMlJpigtdqrYP6CCMIjcWPBeu6cCiDLSMRCsxnejH6NCimAG00mL+y0vvMR0w7bHpX38lwgRYHhhrojdBM5xG84ENRZwYLn2q2818SGiTEEY5gYFpwnIe4C3qXLntMqWblDH0nc4Noi4HDpO7wcoBLfhIBFSgPIAsCwbZu6LnaWmSHGNjin/PS8JLNU0Demybo3RJcfq9WNis1StbtCWwEm4jBeno4+uHFB9v643sXel+Vbp8UMjZVvSxwIFgrabigEDh++TGeTClwjGvvKW231+BxwRnAWXp8MpItUCPa8On5Jz7TxDH+wholWlpL45wFzXVfhheAlxcculi1OO8NGtpiifCO/v8LbE0ljqpRMMzZq6DWFxob9WUoMYarFui9waMJWzoaPtUrISEhISEh8QcQ7cn4K2veVuRHj155v9c72DuMfqfk+GBv623vBKFErXWvFUXZPLDfJt07oAhyTA1J2rChQNQ3ETxUAuRXPh54BlI0grlIQuDO773tjGYTmVVOts+OFHa3Vtr80QbI0PVdhZI9RTl62xnNXTjjIV/waVvwebWDgpQZqe1/7cCXqn/Ll3FEmvhqKIpVF+/eJDTHbhiN7k7jR9BZ16PpQza4X+IkcwBGeu1rcFNR/Ek6uvjIxLUgBh8ryo0ZbkEDqU2dZpoG66N4MyUGaKb2TXznF4yfg8wee6RcBrE8rKcoui+C2u5UF68spu3qVJahu0go2ETJFig0ELJR7bTj52y0g7eUmfFf1bbdnk40DbNjJ94SXO9UYy86mwY3UqBVhQ/s3bvwsXuKEUL3n2iv6cFztXQTX1WAiyMstQ4GqRxE7h0E4dOpk5vbRZNrhxZZ9FH2O+IWdvUuqXdx0+YH9o4Z/NjlEc+2rA7ZQhluDup8f3yjZ+WGncJ/nSXbq2gFm1RyZlidQME5gz1oqZITcBRUMghwjHefkjDQ69zeWqgYQVC4FdyXBhM5FzGjvcAapkEJuxcc4qU/FWWn6m+q4ZEMmyxFfYB7vg/fGMUOfxNyIxemn322qQB7bfubDjC5geDBUikbr4QHqo0b9hFIVHgpA3albHfMdg188kaNESQghCAIQuUMpRYxfyuyX8AN0QDbPaq1zeqB4ieiitI8Us4KbbsCRHrKbqvT2VKEUCC6rpzWGmoV7r7CF5DCblaxbbZtTG1FsdeOctPrVIs5boWkrii7fpnSxQM50EhNEzMiEqadILDSHUU5Q6WmE1QMsP16I0LwNBKSp0iCOsRzqzarLSgTWOHLz9E4jYaQ5FqIruyavlFUxCZLXCiySbH4XmfCdHYw8xL2DlBFaQaXh9t00hW3RcUr8wll2OsU88ZMgm0cCFTDugdOqqT6e5uZAnelGhQ4gmCFx6Njlp3wIwYpVYju3ymLi7Af1lwmE4Hv1eEMqiKBFwIfqaHD+Wgw5z3hEkBYPaXMVCkz6t5MggaPHqEG67MIbrH8w28aVktodJXgnDbebH6WHI9zIGfwiN0xHosxtqj6mRHUK9g0OT+MDAr7eMrtkJ0+Em4/oEmoweXCx7yrSGMWwcTSR/VmBsFKtKLZ5icLt1Xx5nLkuOMUOCn/V7EO37+VnZCgfxxIpfBJfyGpiZEoAkMYKGG6jbyJgN+ZdILJlREzfBDNLCTe4uVEJQgCVYyBcYJ+fYDOdB2QtY8PdtDafIJB4ewT9G/HYayLyAnnJMycwkhI5xFMLr3KpW0E5zvirsVR5GZf4dbIhdoOTyAI2r4EcMEb9m+hEuYJn2DQ7AmClDT5GaxYQo4QPJwS8nUEe6GoAluQ6CnUgDchwdqrCaKsdJ8xu9nZsiM+GNhaQPCYxeZOvCuKEBTXDw68eQVBW1x66gYVWCIIK9QWl2sBweCNJA0eM7ES6Nm8Xp1HsM7qzQMeelMJsiBDw3IAsj8nyE/QnkOQ1aKRDlDFu3UKaWQnCCiUJaUi98F5BAPjs1nh0ogkjkaYLeMECcsnbbIbJMEkQUxmwaDFFq+sanhBTrA4T4N4J45CY2R5tMdv0J5PECM5klhAMHiCicdFm9WEQa0wS4Pi5nSiSTBGkFUdftOkKvyCtp+UKe45R4Oowsgz1BgWsNJp8zKJNTstUb4uIOirvMEPxczo1307IumlE1SvlUovka5CgiqThsve0EX6byj+7+gKczTIKrFNm3/uWMoNC9YUc1+TMwyKlEUEj9ivWGL3eKmiiNepYzmr0JkEIdKdHinxN7ZENMgCkXJSaHcOT9HgWFGDNe/2h0LLUnJn8wjyEk45Omi1eqyPYbkSzgG36uaw2i50RT290Af5/jUoewz2PzMAtV3X2vV2TVd2raCgSyPIepQCmUbURFkgFdgRLxps6GKDrp7xqm+GBuFe68HRypEtilqihkmsRWIEOyHBfEBwez8qAiXmkX98pbHNpU0nyLzoOj4w2MW3zYdCNvY2MZvu28QfSKAtlHsThNuGPlLFhrc5691S9gkerZxWIq8GhwN2sLuz9kx2ThXOY3A/oVXd8AXt5nRRix6QY1DUTc6vR6jaQ4q7Z0DNbhpoBfCPX0zRXM4ICNYwpCWHbSJdD36qmyY2v/xOsOK7btYJbxjpvKFh9lPDNOtq9Jx4hGqyM4iBmPAAlfjhwx+FKXCd1nF4QuwJglA4ngYyhaJGDiSiX+8sN1qZGL/6UyiE1emroULdZLynML8DbyHIK/WM45cJgsFVr6F4emd53h0fUprNpbCziZEoc6+3TKCY6EqWxF44NJFpVPf2fu39hoVNJdOP6EksAlZ1b5rdlJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQWA/8D/sTP4HhayR1AAAAAElFTkSuQmCC"
          class="card-img-top" alt="..."/>
          <div class="card-body custom-card-body">
          <h5 class="card-title">Tercer lugar</h5>
        </div>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  </div>
  )
}

export default VistaEmpresaDos;