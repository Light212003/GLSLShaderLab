#version 330 core
out vec4 FragColor;

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform int  iMouseClick;
uniform sampler2D iChannel0; // Essencial para o teste

void main()
{
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    // Pega na cor do frame anterior
    vec3 corAnterior = texture(iChannel0, uv).rgb;

    vec3 corFinal = corAnterior;

    // Se o rato for clicado, desenha um círculo
    if (iMouseClick == 1) {
        vec2 mouseUV = iMouse.xy / iResolution.xy;
        float distancia = distance(uv, mouseUV);

        // Cria um círculo suave de cor azul
        float circulo = 1.0 - smoothstep(0.05, 0.055, distancia);
        vec3 corPincel = vec3(0.1, 0.5, 1.0);

        // Mistura a cor do pincel com a cor anterior
        corFinal = mix(corAnterior, corPincel, circulo);
    }

    // Escurece a tela muito lentamente para que a tinta desapareça
    corFinal *= 0.995;

    FragColor = vec4(corFinal, 1.0);
}