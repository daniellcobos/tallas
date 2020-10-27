import React from "react"

import ViewCounter from '../components/ViewCounter';
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Conversor de Tallas" description='tallas adidas a nike, adidas to nike '/>
    <h1>Transforme tallas entre marcas</h1>
    <p>Usando las tablas abajo</p>


    <div className='truehead' > <h2>Tallas UK</h2></div>
    <table >
    
    <tr><th>Medida del Pie</th><th>Adidas UK</th><th>Nike UK Hombre</th><th>Nike UK Mujer</th></tr>
     <tr><td>21.6 cm</td><td>NA</td><td>3,5</td><td>2,5</td></tr>
     <tr><td>22.1 cm</td><td>3.5</td><td>4</td><td>3</td></tr>
     <tr><td>22.5 cm</td><td>4</td><td>4,5</td><td>3,5</td></tr>
     <tr><td>22.9 cm</td><td>4.5</td><td>5</td><td>4</td></tr>
     <tr><td>23.3 cm</td><td>5</td><td>5,5</td><td>4,5</td></tr>
     <tr><td>23.8 cm</td><td>5.5</td><td>6</td><td>5</td></tr>
     <tr><td>24.2 cm</td><td>6</td><td>6</td><td>5,5</td></tr>
     <tr><td>24.6 cm</td><td>6.5</td><td>6,5</td><td>6</td></tr>
     <tr><td>25 cm</td><td>7</td><td>7</td><td>6,5</td></tr>
     <tr><td>25.5 cm</td><td>7.5</td><td>7,5</td><td>7</td></tr>
     <tr><td>25.9 cm</td><td>8</td><td>8</td><td>7,5</td></tr>
     <tr><td>26.3 cm</td><td>8.5</td><td>8,5</td><td>8</td></tr>
     <tr><td>26.7 cm</td><td>9</td><td>9</td><td>8,5</td></tr>
     <tr><td>27.1 cm</td><td>9.5</td><td>9,5</td><td>9</td></tr>
     <tr><td>27.6 cm</td><td>10</td><td>10</td><td>9,5</td></tr>
     <tr><td>28 cm</td><td>10.5</td><td>10,5</td><td>NA</td></tr>
     <tr><td>28.4 cm</td><td>11</td><td>11</td><td>NA</td></tr>
     <tr><td>28.8 cm</td><td>11.5</td><td>11,5</td><td>NA</td></tr>
     <tr><td>29.3 cm</td><td>12</td><td>12</td><td>NA</td></tr>
     <tr><td>29.7 cm</td><td>12.5</td><td>12,5</td><td>NA</td></tr>
     <tr><td>30.1 cm</td><td>13</td><td>NA</td><td>NA</td></tr>
     <tr><td>30.5 cm</td><td>13.5</td><td>NA</td><td>NA</td></tr>
     <tr><td>31 cm</td><td>14</td><td>NA</td><td>NA</td></tr>
    </table>
    <div className='truehead' > <h2>Tallas EU</h2></div>
    <table >
    
 <tr ><th>Medida del pie</th><th>Adidas EU</th><th>Nike EU Hombre</th><th>Nike EU Mujer</th></tr>
     <tr><td>21.6 cm</td><td>NA</td><td>35,5</td><td>NA</td></tr>
     <tr><td>22.1 cm</td><td>36</td><td>36</td><td>35,5</td></tr>
     <tr><td>22.5 cm</td><td>36 2/3</td><td>36,5</td><td>36</td></tr>
     <tr><td>22.9 cm</td><td>37 1/3</td><td>37,5</td><td>37,5</td></tr>
     <tr><td>23.3 cm</td><td>38</td><td>38</td><td>38</td></tr>
     <tr><td>23.8 cm</td><td>38 2/3</td><td>38,5</td><td>38,5</td></tr>
     <tr><td>24.2 cm</td><td>39 1/3</td><td>39</td><td>39</td></tr>
     <tr><td>24.6 cm</td><td>40</td><td>40</td><td>40</td></tr>
     <tr><td>25 cm</td><td>40 2/3</td><td>40,5</td><td>40,5</td></tr>
     <tr><td>25.5 cm</td><td>41 1/3</td><td>41</td><td>41</td></tr>
     <tr><td>25.9 cm</td><td>42</td><td>42</td><td>42</td></tr>
     <tr><td>26.3 cm</td><td>42 2/3</td><td>42,5</td><td>42,5</td></tr>
     <tr><td>26.7 cm</td><td>43 1/3</td><td>43</td><td>42,5</td></tr>
     <tr><td>27.1 cm</td><td>44</td><td>44</td><td>43</td></tr>
     <tr><td>27.6 cm</td><td>44 2/3</td><td>44,5</td><td>44</td></tr>
     <tr><td>28 cm</td><td>45 1/3</td><td>45</td><td>44,5</td></tr>
     <tr><td>28.4 cm</td><td>46</td><td>45,5</td><td>NA</td></tr>
     <tr><td>28.8 cm</td><td>46 2/3</td><td>46</td><td>NA</td></tr>
     <tr><td>29.3 cm</td><td>47 1/3</td><td>46,5</td><td>NA</td></tr>
     <tr><td>29.7 cm</td><td>48</td><td>47</td><td>NA</td></tr>
     <tr><td>30.1 cm</td><td>48 2/3</td><td>47,5</td><td>NA</td></tr>
     <tr><td>30.5 cm</td><td>49 1/3</td><td>48</td><td>NA</td></tr>
     <tr><td>31 cm</td><td>50</td><td>NA</td><td>NA</td></tr>
    </table>
    <div className='truehead' > <h2>Tallas US Y JP</h2></div>
    <table>
      <tr><th>Medida del pie</th><th>Adidas JP</th><th>Adidas US  Hombres</th><th>Adidas US Mujeres</th><th>Nike US  Hombres</th><th>Nike US Mujeres</th></tr>
         <tr><td>21.6 cm</td><td>NA</td><td>NA</td><td>NA</td><td>3,5</td><td>NA</td></tr>
         <tr><td>22.1 cm</td><td>220</td><td>4</td><td>5</td><td>4</td><td>5</td></tr>
         <tr><td>22.5 cm</td><td>225</td><td>4.5</td><td>5.5</td><td>4,5</td><td>5,5</td></tr>
         <tr><td>22.9 cm</td><td>230</td><td>5</td><td>6</td><td>5</td><td>6</td></tr>
         <tr><td>23.3 cm</td><td>235</td><td>5.5</td><td>6.5</td><td>5,5</td><td>6,5</td></tr>
         <tr><td>23.8 cm</td><td>240</td><td>6</td><td>7</td><td>6</td><td>7</td></tr>
         <tr><td>24.2 cm</td><td>245</td><td>6.5</td><td>7.5</td><td>6,5</td><td>7,5</td></tr>
         <tr><td>24.6 cm</td><td>250</td><td>7</td><td>8</td><td>7</td><td>8</td></tr>
         <tr><td>25 cm</td><td>255</td><td>7.5</td><td>8.5</td><td>7,5</td><td>8,5</td></tr>
         <tr><td>25.5 cm</td><td>260</td><td>8</td><td>9</td><td>8</td><td>9</td></tr>
         <tr><td>25.9 cm</td><td>265</td><td>8.5</td><td>9.5</td><td>8,5</td><td>9,5</td></tr>
         <tr><td>26.3 cm</td><td>270</td><td>9</td><td>10</td><td>9</td><td>10</td></tr>
         <tr><td>26.7 cm</td><td>275</td><td>9.5</td><td>10.5</td><td>9,5</td><td>10,5</td></tr>
         <tr><td>27.1 cm</td><td>280</td><td>10</td><td>11</td><td>10</td><td>11</td></tr>
         <tr><td>27.6 cm</td><td>285</td><td>10.5</td><td>11.5</td><td>10,5</td><td>11,5</td></tr>
         <tr><td>28 cm</td><td>290</td><td>11</td><td>12</td><td>11</td><td>NA</td></tr>
         <tr><td>28.4 cm</td><td>295</td><td>11.5</td><td>12.5</td><td>11,5</td><td>NA</td></tr>
         <tr><td>28.8 cm</td><td>300</td><td>12</td><td>13</td><td>12</td><td>NA</td></tr>
         <tr><td>29.3 cm</td><td>305</td><td>12.5</td><td>13.5</td><td>12,5</td><td>NA</td></tr>
         <tr><td>29.7 cm</td><td>310</td><td>13</td><td>14</td><td>13</td><td>NA</td></tr>
         <tr><td>30.1 cm</td><td>315</td><td>13.5</td><td>14.5</td><td>13,5</td><td>NA</td></tr>
         <tr><td>30.5 cm</td><td>320</td><td>14</td><td>15</td><td>14</td><td>NA</td></tr>
         <tr><td>31 cm</td><td>325</td><td>14.5</td><td>15.5</td><td>NA</td><td>NA</td></tr>
       </table>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    <ViewCounter id="index" />

  </Layout>
)

export default IndexPage
