-- SQLite
--testing sql queries
select ri.stepNumber,i.ingredientName, ri.quantity 
from recipe as r 
join recipes_ingredients as ri on ri.recipeid = r.recipeid 
join ingredient as i on i.ingredientID = ri.ingredientID 
where r.recipeid = 1 order by ri.stepNumber
