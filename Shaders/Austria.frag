#version 330 core
out vec4 FragColor;
in vec2 TexCoord;

void main()
{
    vec2 uv = TexCoord;
    vec3 cor = vec3(1.0, 1.0, 1.0);

    if (uv.y < (1.0/3.0) || uv.y > (2.0/3.0))
    {
        cor = vec3(0.9, 0.1, 0.15); // Vermelho
    }

    FragColor.rgb = cor;
    FragColor.a = 1.0;
}