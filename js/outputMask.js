var mediaMask=`<div class="col-lg-4 col-sm-12">       
               <h3>$$title$</h3>
               <img src="$$image$" alt="not found!"/>
               <p class="blue">$$genre$</p>
               <div class="details"><h4><strong>Details</strong></h4>
               <p>Author: $$author$</p> 
               <p>Type: $$type$</p>
               <p>Publisher: $$publisher$</p>
               <textarea> $$description$</textarea> 
               </div>  
               <p>$$rating$</p>
               </div>`;

// note: addMediaDialog consits both of addMediaData and addMediaDialog
var addMediaData={};

// note: addMediaDialog consits both of addMediaData and addMediaDialog
var addMediaDialog=`<div id="MediaDialog">
                    <h3>addMedia Dialog</h3>
                    
                     <p><h4>title:</h4> <span><input type="text" oninput="addMediaData.title=$(this).val();"/></span></p>
                     <p><h4>type:</h4> <span><select onchange="addMediaData.type=$(this).val();">
                                               <option value="">---</option>
                                               <option value="CD">CD</option>
                                               <option value="Book">Book</option>
                                               <option value="DVD">DVD</option>
                                               <option value="Comic">Comic</option>
                                             </select>
                                       </span>
                     </p>
                     <p><h4>author:</h4> <span><input oninput="addMediaData.author=$(this).val();" type="text"/></span></p>
                     <p><h4>publisher:</h4> <span><input oninput="addMediaData.publisher=$(this).val();" type="text"/></span></p>
                     <p><h4>genre:</h4> <span><select onchange="addMediaData.genre=$(this).val();">
                                                <option value="">---</option>
                                                <option value="Rock">Rock</option>
                                                <option value="Pop">Pop</option>
                                                <option value="SF">SF</option>
                                                <option value="Crimi">Crimi</option>
                                                <option value="Horror">Horror</option>
                                                <option value="Comedy">Comedy</option>
                                                <option value="Drama">Drama</option>
                                                <option value="Documentary">Documentary</option>
                                                <option value="Children">Children</option>
                                                <option value="Fantasy">Fantasy</option>   
                                              </select>
                                        </span>
                     </p>
                     <p><h4>image:</h4> <span><input oninput="addMediaData.image=$(this).val();" type="text"/></span></p>
                     
                     <p><h4>rating:</h4> <span><select onchange="addMediaData.rating=Number($(this).val());">
                                                 <option value='0'>---</option>
                                                 <option value='0'>&#x2606;</option>
                                                 <option value='1'>&starf;</option>
                                                 <option value='2'>&starf;&starf;</option>
                                                 <option value='3'>&starf;&starf;&starf;</option>
                                                 <option value='4'>&starf;&starf;&starf;&starf;</option>
                                                 <option value='5'>&starf;&starf;&starf;&starf;&starf;</option> 
                                               </select>
                                         </span>
                     </p>
                     <p><h4>description:</h4> <span><textarea id='addDescription' oninput="addMediaData.description=$(this).val();">
                                                    </textarea>
                                              </span>
                     </p>
                     <button onclick="console.log(JSON.stringify(addMediaData));mediaData.push(addMediaData);">submit</button>   
                    
                    </div>   
                   `;