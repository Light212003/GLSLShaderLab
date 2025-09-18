float Listras(float x, float quantidade, float distancia)
{
    x = floor(x * quantidade);
    return mod(x, distancia);
}

void main()
{
    vec2 uv = GL_fragCoord.xy/iResolution.xy;
     
    float quantidade = 3.0;
    float distancia = 2.0;
    float listras = Listras(uv.y, quantidade, distancia);
     
    vec3 cor1 = vec3(0.6, 0.0, 0.0);
    vec3 cor2 = vec3(1.0, 1.0, 1.0);
    fragColor.rgb = mix(cor1, cor2, listras);
}