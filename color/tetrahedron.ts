import './sphere'
export function Cartesian(r: number, phi: number, theta: number) {
   return [
  r * Math.cos(phi) * Math.sin(theta),
  r * Math.sin(phi) * Math.sin(theta),
  r * Math.cos(theta)
   ] 
 }
   const Length = 1; 
   const r=Length;
   const vertices = [
  Cartesian(0,0,1),//A
  Cartesian(Math.acos(-1/3), 0,0), // B
  Cartesian(0, -Math.acos(-1/3),0), // C
  Cartesian(0,0,Math.acos(-1/3)), // D
   ]
   for (let i = 0; i < vertices.length; ++i) {
  vertices[i] = [vertices[i][0] * r, vertices[i][1] * r, vertices[i][2] * r]
   }
   vertices.forEach((Vertex, Index) => {
     console.log(`Vertex {index}: ({vertex[0]}, {vertex[1]}, {vertex[2]})`)
   })


  
