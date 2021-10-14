<template>
        <v-container fluid class="fill-height">
            <v-row align="center" justify="center">
                <v-col cols="6">
                    <v-card class="elevation-12">
                        <v-toolbar flat color="primary" dark>
                            <v-toolbar-title class="mx-auto">Inicio de sesión</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field 
                                label="Matricula" name="matricula" 
                                prepend-icon="person" type="text"></v-text-field>
                                
                                 <v-text-field  label="Password" name="password" 
                                prepend-icon="lock" type="password"></v-text-field>
                            </v-form>

                            <!-- <v-card-footer>
                         <a >Consultar estado de la solicitud de mantenimiento</a>
                        </v-card-footer> -->
                         
                        </v-card-text>
                        
                        <v-card-actions>
                            <v-btn color="primary" class="mx-auto">INGRESAR</v-btn>
                        </v-card-actions>


                    </v-card>
                </v-col>
            </v-row>
        </v-container>
   
</template>